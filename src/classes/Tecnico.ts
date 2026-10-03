import { Funcionario } from "./Funcionario";
import { Cargo } from "../enums/Cargo";

export class Tecnico extends Funcionario {
  private especialidade: string;

  constructor(name: string, idade: number, matricula: number, salario: number, especialidade: string) {
    super(name, idade, matricula, salario, Cargo.Tecnico);
    this.especialidade = especialidade;
  }

  public getEspecialidade(): string {
    return this.especialidade;
  }

  // Sobrescrita de método (Polimorfismo)
  public trabalhar(): void {
    console.log(`${this.getname()} está realizando manutenção especializada em ${this.especialidade}.`);
  }
}