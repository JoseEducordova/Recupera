import { Equipamento } from "./Equipamento";
import { StatusEquipamento } from "../enums/StatusEquipamento";
import { Manutencao } from "../interfaces/manutencao";

export class Gerador extends Equipamento implements Manutencao {
  private potenciaKW: number;

  constructor(codigo: string, nome: string, marca: string, potenciaKW: number, status?: StatusEquipamento) {
    super(codigo, nome, marca, status);
    this.potenciaKW = potenciaKW;
  }

  public getPotencia(): number {
    return this.potenciaKW;
  }

  // Sobrescrita de operar() - Polimorfismo
  public operar(): void {
    if (this.status === StatusEquipamento.Danificado) {
      console.log(`⚠️ ERRO: O gerador ${this.getNome()} está Danificado!`);
      return;
    }
    console.log(`⚡ O gerador ${this.getNome()} (${this.getCodigo()}) está gerando ${this.potenciaKW} kW de energia.`);
  }

  // Implementação do método da interface Manutencao
  public realizarManutencao(): void {
    console.log(`🔧 Substituindo óleo e testando circuitos do gerador ${this.getNome()}...`);
    this.setStatus(StatusEquipamento.Operacional);
  }
}
// Interface para garantir a restrição de Generic (Requisito 15)
export interface Identificavel {
  getId(): string | number;
}

// Classe Genérica que só aceita tipos T que implementem Identificavel (Requisito 13, 14 e 15)
export class Gerenciador<T extends Identificavel> {
  private itens: T[] = [];

  // 1. Adicionar item
  public adicionar(item: T): void {
    // Verifica se já existe um item com o mesmo ID
    const existe = this.itens.some(i => i.getId() === item.getId());
    if (existe) {
      console.log(`⚠️ Erro: Já existe um elemento cadastrado com a identificação '${item.getId()}'.`);
      return;
    }
    this.itens.push(item);
  }

  // 2. Remover item por ID
  public remover(id: string | number): boolean {
    const indice = this.itens.findIndex(item => item.getId() === id);
    if (indice !== -1) {
      this.itens.splice(indice, 1);
      return true;
    }
    return false;
  }

  // 3. Listar todos
  public listarTodos(): T[] {
    return this.itens;
  }

  // 4. Busca Genérica por função de condição (Requisito 14)
  public buscar(condicao: (item: T) => boolean): T[] {
    return this.itens.filter(condicao);
  }

  // 5. Obter por ID direto
  public obterPorId(id: string | number): T | undefined {
    return this.itens.find(item => item.getId() === id);
  }
}