import readline from "readline-sync";

// Importação dos Enums
import { Cargo } from "./enums/Cargo";
import { StatusEquipamento } from "./enums/StatusEquipamento";
import { StatusPlataforma } from "./enums/StatusPlataforma";

// Importação das Classes de Funcionários
import { Funcionario } from "./classes/Funcionario";
import { Operador } from "./classes/Operador";
import { Engenheiro } from "./classes/Engenheiro";
import { Tecnico } from "./classes/Tecnico";

// Importação das Classes de Equipamentos
import { Equipamento } from "./classes/Equipamento";
import { Bomba } from "./classes/Bomba";
import { Gerador } from "./classes/Gerador";
import { Tanque } from "./classes/Tanque";

// Importação da Plataforma
import { Plataforma } from "./classes/Plataforma";

// 1. Criando a Plataforma
const plataforma = new Plataforma("Oceanic-01", "Bacia de Campos - RJ", 50000);

// 2. Carga inicial obrigatória (Requisito 19)
function carregarDadosIniciais(): void {
  // Cadastrando 3 Funcionários
  const op = new Operador("Carlos Silva", 30, 101, 4500, "Diurno");
  const eng = new Engenheiro("Ana Souza", 38, 102, 12000, "CREA-RJ 123456");
  const tec = new Tecnico("João Santos", 28, 103, 5500, "Automação Industrial");

  plataforma.gerenciadorFuncionarios.adicionar(op);
  plataforma.gerenciadorFuncionarios.adicionar(eng);
  plataforma.gerenciadorFuncionarios.adicionar(tec);

  // Cadastrando 3 Equipamentos
  const bomba = new Bomba("BP-01", "Bomba Principal", "Flowserve", 150);
  const gerador = new Gerador("GE-01", "Gerador Diesel", "Caterpillar", 500);
  const tanque = new Tanque("TN-01", "Tanque A1", "PetroTank", 10000);

  plataforma.gerenciadorEquipamentos.adicionar(bomba);
  plataforma.gerenciadorEquipamentos.adicionar(gerador);
  plataforma.gerenciadorEquipamentos.adicionar(tanque);
}

carregarDadosIniciais();

// 3. Loop do Menu Principal (Requisito 16 e 17)
let rodando = true;

while (rodando) {
  console.log(`
========================================
        PLATAFORMA ${plataforma.getNome().toUpperCase()}
========================================
1 - Cadastrar funcionário
2 - Listar funcionários
3 - Buscar funcionário
4 - Cadastrar equipamento
5 - Listar equipamentos
6 - Buscar equipamento
7 - Executar trabalho/operações
8 - Realizar manutenção em equipamento
9 - Ver informações da plataforma
0 - Encerrar programa
========================================`);

  const opcao = readline.question("Escolha uma opcao: ");

  switch (opcao) {
    case "1": {
      console.log("\n--- CADASTRO DE FUNCIONÁRIO ---");
      console.log("1. Operador | 2. Engenheiro | 3. Técnico");
      const tipo = readline.question("Tipo de funcionario: ");
      const nome = readline.question("Nome: ");
      const idade = readline.questionInt("Idade: ");
      const matricula = readline.questionInt("Matricula: ");
      const salario = readline.questionFloat("Salario: ");

      if (tipo === "1") {
        const turno = readline.question("Turno (ex: Diurno/Noturno): ");
        const f = new Operador(nome, idade, matricula, salario, turno);
        plataforma.gerenciadorFuncionarios.adicionar(f);
      } else if (tipo === "2") {
        const crea = readline.question("Registro CREA: ");
        const f = new Engenheiro(nome, idade, matricula, salario, crea);
        plataforma.gerenciadorFuncionarios.adicionar(f);
      } else if (tipo === "3") {
        const esp = readline.question("Especialidade: ");
        const f = new Tecnico(nome, idade, matricula, salario, esp);
        plataforma.gerenciadorFuncionarios.adicionar(f);
      } else {
        console.log("❌ Tipo inválido!");
      }
      break;
    }

    case "2": {
      console.log("\n--- LISTA DE FUNCIONÁRIOS ---");
      const lista = plataforma.gerenciadorFuncionarios.listarTodos();
      if (lista.length === 0) {
        console.log("Nenhum funcionário cadastrado.");
      } else {
        lista.forEach((f) => f.exibirDados());
      }
      break;
    }

    case "3": {
      console.log("\n--- BUSCA DE FUNCIONÁRIO (GENÉRICA) ---");
      console.log("1. Buscar por Cargo | 2. Buscar por Matrícula");
      const opBusca = readline.question("Opcao: ");

      if (opBusca === "1") {
        console.log("Cargos disponíveis: Operador, Engenheiro, Técnico");
        const cargoInput = readline.question("Digite o cargo: ").toLowerCase();

        // Demonstração da Busca Genérica (Requisito 14)
        const encontrados = plataforma.gerenciadorFuncionarios.buscar(
          (f) => f.getCargo().toLowerCase() === cargoInput
        );

        console.log(`\nResultados encontrados (${encontrados.length}):`);
        encontrados.forEach((f) => f.exibirDados());
      } else if (opBusca === "2") {
        const mat = readline.questionInt("Digite a matricula: ");
        const f = plataforma.gerenciadorFuncionarios.obterPorId(mat);
        if (f) {
          f.exibirDados();
        } else {
          console.log("❌ Funcionário não encontrado.");
        }
      }
      break;
    }

    case "4": {
      console.log("\n--- CADASTRO DE EQUIPAMENTO ---");
      console.log("1. Bomba | 2. Gerador | 3. Tanque");
      const tipo = readline.question("Tipo de equipamento: ");
      const codigo = readline.question("Codigo unico: ");
      const nome = readline.question("Nome/Descricao: ");
      const marca = readline.question("Marca: ");

      try {
        if (tipo === "1") {
          const vazao = readline.questionFloat("Vazao (L/s): ");
          const eq = new Bomba(codigo, nome, marca, vazao);
          plataforma.gerenciadorEquipamentos.adicionar(eq);
        } else if (tipo === "2") {
          const potencia = readline.questionFloat("Potência (kW): ");
          const eq = new Gerador(codigo, nome, marca, potencia);
          plataforma.gerenciadorEquipamentos.adicionar(eq);
        } else if (tipo === "3") {
          const cap = readline.questionFloat("Capacidade total em Litros: ");
          const eq = new Tanque(codigo, nome, marca, cap);
          plataforma.gerenciadorEquipamentos.adicionar(eq);
        } else {
          console.log("❌ Tipo inválido!");
        }
      } catch (err: any) {
        console.log(`❌ Erro no cadastro: ${err.message}`);
      }
      break;
    }

    case "5": {
      console.log("\n--- LISTA DE EQUIPAMENTOS ---");
      const eqLista = plataforma.gerenciadorEquipamentos.listarTodos();
      if (eqLista.length === 0) {
        console.log("Nenhum equipamento cadastrado.");
      } else {
        eqLista.forEach((e) => e.exibirInformacoes());
      }
      break;
    }

    case "6": {
      console.log("\n--- BUSCA DE EQUIPAMENTO (GENÉRICA) ---");
      console.log("1. Buscar por Status | 2. Buscar por Código");
      const opBusca = readline.question("Opcao: ");

      if (opBusca === "1") {
        console.log("Status: Operacional, Em Manutenção, Danificado, Desativado");
        const stInput = readline.question("Digite o status: ").toLowerCase();

        // Demonstração da Busca Genérica por Status
        const encontrados = plataforma.gerenciadorEquipamentos.buscar(
          (e) => e.getStatus().toLowerCase() === stInput
        );

        console.log(`\nResultados encontrados (${encontrados.length}):`);
        encontrados.forEach((e) => e.exibirInformacoes());
      } else if (opBusca === "2") {
        const cod = readline.question("Digite o codigo: ");
        const eq = plataforma.gerenciadorEquipamentos.obterPorId(cod);
        if (eq) {
          eq.exibirInformacoes();
        } else {
          console.log("❌ Equipamento não encontrado.");
        }
      }
      break;
    }

    case "7": {
      console.log("\n--- DEMONSTRAÇÃO DE POLIMORFISMO ---");
      console.log("\n1. Executando o método 'trabalhar()' de todos os Funcionários:");
      const funcionarios = plataforma.gerenciadorFuncionarios.listarTodos();
      funcionarios.forEach((f) => f.trabalhar()); // Polimorfismo na prática!

      console.log("\n2. Executando o método 'operar()' de todos os Equipamentos:");
      const equipamentos = plataforma.gerenciadorEquipamentos.listarTodos();
      equipamentos.forEach((e) => e.operar()); // Polimorfismo na prática!
      break;
    }

    case "8": {
      console.log("\n--- MANUTENÇÃO DE EQUIPAMENTO ---");
      const cod = readline.question("Digite o codigo do equipamento: ");
      const eq = plataforma.gerenciadorEquipamentos.obterPorId(cod);

      if (eq) {
        // Testa se o objeto implementa a interface Manutencao
        if ("realizarManutencao" in eq) {
          (eq as any).realizarManutencao();
        } else {
          console.log(`⚠️ O equipamento ${eq.getNome()} não aceita manutenção direta via interface.`);
        }
      } else {
        console.log("❌ Equipamento não encontrado.");
      }
      break;
    }

    case "9": {
      plataforma.exibirInformacoes();
      break;
    }

    case "0": {
      console.log("\nEncerrando o sistema da plataforma. Até mais!");
      rodando = false;
      break;
    }

    default:
      console.log("❌ Opção inválida! Tente novamente.");
      break;
  }
}