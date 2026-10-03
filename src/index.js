"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Operador_1 = require("./classes/Operador");
const Engenheiro_1 = require("./classes/Engenheiro");
const Tecnico_1 = require("./classes/Tecnico");
const Bomba_1 = require("./classes/Bomba");
const Gerador_1 = require("./classes/Gerador");
const Tanque_1 = require("./classes/Tanque");
// Importação da Plataforma
const Plataforma_1 = require("./classes/Plataforma");
// 1. Criando a Plataforma
const plataforma = new Plataforma_1.Plataforma("Oceanic-01", "Bacia de Campos - RJ", 50000);
// 2. Carga inicial obrigatória (Requisito 19)
function carregarDadosIniciais() {
    // Cadastrando 3 Funcionários
    const op = new Operador_1.Operador("Carlos Silva", 30, 101, 4500, "Diurno");
    const eng = new Engenheiro_1.Engenheiro("Ana Souza", 38, 102, 12000, "CREA-RJ 123456");
    const tec = new Tecnico_1.Tecnico("João Santos", 28, 103, 5500, "Automação Industrial");
    plataforma.gerenciadorFuncionarios.adicionar(op);
    plataforma.gerenciadorFuncionarios.adicionar(eng);
    plataforma.gerenciadorFuncionarios.adicionar(tec);
    // Cadastrando 3 Equipamentos
    const bomba = new Bomba_1.Bomba("BP-01", "Bomba Principal", "Flowserve", 150);
    const gerador = new Gerador_1.Gerador("GE-01", "Gerador Diesel", "Caterpillar", 500);
    const tanque = new Tanque_1.Tanque("TN-01", "Tanque A1", "PetroTank", 10000);
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
    const opcao = readline_sync_1.default.question("Escolha uma opcao: ");
    switch (opcao) {
        case "1": {
            console.log("\n--- CADASTRO DE FUNCIONÁRIO ---");
            console.log("1. Operador | 2. Engenheiro | 3. Técnico");
            const tipo = readline_sync_1.default.question("Tipo de funcionario: ");
            const nome = readline_sync_1.default.question("Nome: ");
            const idade = readline_sync_1.default.questionInt("Idade: ");
            const matricula = readline_sync_1.default.questionInt("Matricula: ");
            const salario = readline_sync_1.default.questionFloat("Salario: ");
            if (tipo === "1") {
                const turno = readline_sync_1.default.question("Turno (ex: Diurno/Noturno): ");
                const f = new Operador_1.Operador(nome, idade, matricula, salario, turno);
                plataforma.gerenciadorFuncionarios.adicionar(f);
            }
            else if (tipo === "2") {
                const crea = readline_sync_1.default.question("Registro CREA: ");
                const f = new Engenheiro_1.Engenheiro(nome, idade, matricula, salario, crea);
                plataforma.gerenciadorFuncionarios.adicionar(f);
            }
            else if (tipo === "3") {
                const esp = readline_sync_1.default.question("Especialidade: ");
                const f = new Tecnico_1.Tecnico(nome, idade, matricula, salario, esp);
                plataforma.gerenciadorFuncionarios.adicionar(f);
            }
            else {
                console.log("❌ Tipo inválido!");
            }
            break;
        }
        case "2": {
            console.log("\n--- LISTA DE FUNCIONÁRIOS ---");
            const lista = plataforma.gerenciadorFuncionarios.listarTodos();
            if (lista.length === 0) {
                console.log("Nenhum funcionário cadastrado.");
            }
            else {
                lista.forEach((f) => f.exibirDados());
            }
            break;
        }
        case "3": {
            console.log("\n--- BUSCA DE FUNCIONÁRIO (GENÉRICA) ---");
            console.log("1. Buscar por Cargo | 2. Buscar por Matrícula");
            const opBusca = readline_sync_1.default.question("Opcao: ");
            if (opBusca === "1") {
                console.log("Cargos disponíveis: Operador, Engenheiro, Técnico");
                const cargoInput = readline_sync_1.default.question("Digite o cargo: ").toLowerCase();
                // Demonstração da Busca Genérica (Requisito 14)
                const encontrados = plataforma.gerenciadorFuncionarios.buscar((f) => f.getCargo().toLowerCase() === cargoInput);
                console.log(`\nResultados encontrados (${encontrados.length}):`);
                encontrados.forEach((f) => f.exibirDados());
            }
            else if (opBusca === "2") {
                const mat = readline_sync_1.default.questionInt("Digite a matricula: ");
                const f = plataforma.gerenciadorFuncionarios.obterPorId(mat);
                if (f) {
                    f.exibirDados();
                }
                else {
                    console.log("❌ Funcionário não encontrado.");
                }
            }
            break;
        }
        case "4": {
            console.log("\n--- CADASTRO DE EQUIPAMENTO ---");
            console.log("1. Bomba | 2. Gerador | 3. Tanque");
            const tipo = readline_sync_1.default.question("Tipo de equipamento: ");
            const codigo = readline_sync_1.default.question("Codigo unico: ");
            const nome = readline_sync_1.default.question("Nome/Descricao: ");
            const marca = readline_sync_1.default.question("Marca: ");
            try {
                if (tipo === "1") {
                    const vazao = readline_sync_1.default.questionFloat("Vazao (L/s): ");
                    const eq = new Bomba_1.Bomba(codigo, nome, marca, vazao);
                    plataforma.gerenciadorEquipamentos.adicionar(eq);
                }
                else if (tipo === "2") {
                    const potencia = readline_sync_1.default.questionFloat("Potência (kW): ");
                    const eq = new Gerador_1.Gerador(codigo, nome, marca, potencia);
                    plataforma.gerenciadorEquipamentos.adicionar(eq);
                }
                else if (tipo === "3") {
                    const cap = readline_sync_1.default.questionFloat("Capacidade total em Litros: ");
                    const eq = new Tanque_1.Tanque(codigo, nome, marca, cap);
                    plataforma.gerenciadorEquipamentos.adicionar(eq);
                }
                else {
                    console.log("❌ Tipo inválido!");
                }
            }
            catch (err) {
                console.log(`❌ Erro no cadastro: ${err.message}`);
            }
            break;
        }
        case "5": {
            console.log("\n--- LISTA DE EQUIPAMENTOS ---");
            const eqLista = plataforma.gerenciadorEquipamentos.listarTodos();
            if (eqLista.length === 0) {
                console.log("Nenhum equipamento cadastrado.");
            }
            else {
                eqLista.forEach((e) => e.exibirInformacoes());
            }
            break;
        }
        case "6": {
            console.log("\n--- BUSCA DE EQUIPAMENTO (GENÉRICA) ---");
            console.log("1. Buscar por Status | 2. Buscar por Código");
            const opBusca = readline_sync_1.default.question("Opcao: ");
            if (opBusca === "1") {
                console.log("Status: Operacional, Em Manutenção, Danificado, Desativado");
                const stInput = readline_sync_1.default.question("Digite o status: ").toLowerCase();
                // Demonstração da Busca Genérica por Status
                const encontrados = plataforma.gerenciadorEquipamentos.buscar((e) => e.getStatus().toLowerCase() === stInput);
                console.log(`\nResultados encontrados (${encontrados.length}):`);
                encontrados.forEach((e) => e.exibirInformacoes());
            }
            else if (opBusca === "2") {
                const cod = readline_sync_1.default.question("Digite o codigo: ");
                const eq = plataforma.gerenciadorEquipamentos.obterPorId(cod);
                if (eq) {
                    eq.exibirInformacoes();
                }
                else {
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
            const cod = readline_sync_1.default.question("Digite o codigo do equipamento: ");
            const eq = plataforma.gerenciadorEquipamentos.obterPorId(cod);
            if (eq) {
                // Testa se o objeto implementa a interface Manutencao
                if ("realizarManutencao" in eq) {
                    eq.realizarManutencao();
                }
                else {
                    console.log(`⚠️ O equipamento ${eq.getNome()} não aceita manutenção direta via interface.`);
                }
            }
            else {
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
