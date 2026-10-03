import { Equipamento } from "./Equipamento";
import { StatusEquipamento } from "../enums/StatusEquipamento";
import { Manutencao } from "../interfaces/manutencao";
import { Operacao } from "../interfaces/operacao";

// Múltiplas interfaces implementadas (Requisito 10)
export class Bomba extends Equipamento implements Manutencao, Operacao {
  private vazaoLitrosPorSegundo: number;

  constructor(codigo: string, nome: string, marca: string, vazao: number, status?: StatusEquipamento) {
    super(codigo, nome, marca, status);
    this.vazaoLitrosPorSegundo = vazao;
  }

  public getVazao(): number {
    return this.vazaoLitrosPorSegundo;
  }

  // Sobrescrita de operar() - Polimorfismo
  public operar(): void {
    if (this.status === StatusEquipamento.Danificado) {
      console.log(`⚠️ ERRO: A bomba ${this.getNome()} está DANIFICADA e não pode operar!`);
      return;
    }
    console.log(`⚙️ A bomba ${this.getNome()} (${this.getCodigo()}) está bombeando petróleo a ${this.vazaoLitrosPorSegundo} L/s.`);
  }

  // Implementação do método da interface Operacao
  public iniciarOperacao(): void {
    console.log(`🚀 Iniciando o fluxo de bombeamento da bomba ${this.getNome()}...`);
    this.setStatus(StatusEquipamento.Operacional);
  }

  // Implementação do método da interface Manutencao
  public realizarManutencao(): void {
    console.log(`🔧 Realizando a troca de vedações e revisão mecânica na bomba ${this.getNome()}...`);
    this.setStatus(StatusEquipamento.Operacional);
  }
}