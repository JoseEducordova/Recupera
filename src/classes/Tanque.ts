import { Equipamento } from "./Equipamento";
import { StatusEquipamento } from "../enums/StatusEquipamento";

export class Tanque extends Equipamento {
  private capacidadeLitros: number;
  private volumeAtual: number;

  constructor(codigo: string, nome: string, marca: string, capacidadeLitros: number, status?: StatusEquipamento) {
    super(codigo, nome, marca, status);
    this.capacidadeLitros = capacidadeLitros;
    this.volumeAtual = 0;
  }

  public getCapacidade(): number {
    return this.capacidadeLitros;
  }

  public getVolumeAtual(): number {
    return this.volumeAtual;
  }

  // Sobrescrita de operar() - Polimorfismo
  public operar(): void {
    console.log(`🛢️ O tanque ${this.getNome()} (${this.getCodigo()}) está armazenando ${this.volumeAtual}L / ${this.capacidadeLitros}L de petróleo.`);
  }
}