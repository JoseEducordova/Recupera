import { Funcionario } from "./Funcionario";
import { Cargo } from "../enums/Cargo";

export class Engenheiro extends Funcionario {
  private crea: string; // Registro do conselho de engenharia

  constructor(name: string, idade: number, matricula: number, salario: number, crea: string) {
    super(name, idade, matricula, salario, Cargo.Engenheiro);
    this.crea = crea;
  }

  public getCrea(): string {
    return this.crea;
  }

  // Sobrescrita de método (Polimorfismo)
  public trabalhar(): void {
    console.log(`${this.getname()} (CREA: ${this.crea}) está realizando uma análise técnica da estrutura da plataforma.`);
  }
}