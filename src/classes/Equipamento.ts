import { StatusEquipamento } from "../enums/StatusEquipamento";

export class Equipamento {
  private codigo: string;
  private nome: string;
  private marca: string;
  protected status: StatusEquipamento;

  constructor(codigo: string, nome: string, marca: string, status: StatusEquipamento = StatusEquipamento.Operacional) {
    if (!codigo || codigo.trim() === "") {
      throw new Error("Erro: O código do equipamento não pode estar vazio!");
    }
    this.codigo = codigo;
    this.nome = nome;
    this.marca = marca;
    this.status = status;
  }

  // Getters e Setters
  public getCodigo(): string {
    return this.codigo;
  }

  public getNome(): string {
    return this.nome;
  }

  public getMarca(): string {
    return this.marca;
  }

  public getStatus(): StatusEquipamento {
    return this.status;
  }

  public setStatus(novoStatus: StatusEquipamento): void {
    this.status = novoStatus;
  }

  // Método polimórfico (será sobrescrito nas subclasses)
  public operar(): void {
    console.log(`O equipamento ${this.nome} (${this.codigo}) está em funcionamento básico.`);
  }

  public exibirInformacoes(): void {
    console.log(`[${this.codigo}] ${this.nome} | Marca: ${this.marca} | Status: ${this.status}`);
  }
  public getId(): string{
return this.getCodigo()
  }
}