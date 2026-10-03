import { Funcionario } from "./Funcionario";
import { Equipamento } from "./Equipamento";
import { StatusPlataforma } from "../enums/StatusPlataforma";
import { Gerenciador } from "../generics/Gerenciador";

export class Plataforma {
  private nome: string;
  private localizacao: string;
  private capacidadeProducaoDiaria: number; // Em barris de petróleo
  private status: StatusPlataforma;

  // Gerenciadores Genéricos
  public gerenciadorFuncionarios: Gerenciador<Funcionario>;
  public gerenciadorEquipamentos: Gerenciador<Equipamento>;

  constructor(nome: string, localizacao: string, capacidadeProducaoDiaria: number) {
    this.nome = nome;
    this.localizacao = localizacao;
    this.capacidadeProducaoDiaria = capacidadeProducaoDiaria;
    this.status = StatusPlataforma.Operando;

    this.gerenciadorFuncionarios = new Gerenciador<Funcionario>();
    this.gerenciadorEquipamentos = new Gerenciador<Equipamento>();
  }

  // Getters e Setters
  public getNome(): string {
    return this.nome;
  }

  public getStatus(): StatusPlataforma {
    return this.status;
  }

  public setStatus(status: StatusPlataforma): void {
    this.status = status;
  }

  // Iniciar e encerrar operações da plataforma (Requisito 18)
  public iniciarOperacao(): void {
    if (this.status === StatusPlataforma.Desativada) {
      console.log("❌ A plataforma está Desativada e não pode iniciar operações!");
      return;
    }
    if (this.status === StatusPlataforma.Emergência) {
      console.log("🚨 A plataforma está em EMERGÊNCIA! Operações bloqueadas.");
      return;
    }
    this.status = StatusPlataforma.Operando;
    console.log(`✅ Operações iniciadas com sucesso na plataforma ${this.nome}.`);
  }

  public encerrarOperacao(): void {
    this.status = StatusPlataforma.Desativada;
    console.log(`🛑 A plataforma ${this.nome} foi Desativada temporariamente.`);
  }

  // Exibir resumo da plataforma
  public exibirInformacoes(): void {
    console.log(`\n========================================`);
    console.log(` 🛢️ PLATAFORMA: ${this.nome}`);
    console.log(`========================================`);
    console.log(`📍 Localização: ${this.localizacao}`);
    console.log(`📊 Capacidade Máxima: ${this.capacidadeProducaoDiaria} barris/dia`);
    console.log(`🔴 Status Atual: ${this.status}`);
    console.log(`👥 Total de Funcionários: ${this.gerenciadorFuncionarios.listarTodos().length}`);
    console.log(`⚙️ Total de Equipamentos: ${this.gerenciadorEquipamentos.listarTodos().length}`);
    console.log(`========================================\n`);
  }
}