import { Funcionario } from "./Funcionario";
import { Cargo } from "../enums/Cargo";

export class Operador extends Funcionario {
  private turno: string;

  constructor(name: string, idade: number, matricula: number, salario: number, turno: string) {
    // 'super' chama o construtor da classe pai (Funcionario)
    super(name, idade, matricula, salario, Cargo.Operador);
    this.turno = turno;
  }

  public getTurno(): string {
    return this.turno;
  }

  // Sobrescrita de método (Polimorfismo)
  
  public trabalhar(): void {
    console.log(`${this.getname()} está operando os equipamentos do turno da ${this.turno}.`);
  }
}