import { isDataView } from "util/types"

export class Funcionario {

    private name: string
    private idade: number
    private matricula: number
    private salario: number
    protected cargo: string

public constructor (name: string, idade: number, matricula: number, salario: number, cargo: string){
    this.name = name
    this.idade = idade
    this.matricula = matricula
    this.salario = salario
    this.cargo = cargo
}

public getname(): string{
    return this.name
}
public setname(value: string): void{
    this.name = value
}

public getidade(): number{
    return this.idade
}
public setidade(value: number): void{
    if (value < 0) {
        console.log("Erro: A idade não pode ser negativa!");
        this.idade = 0;
        return;
      }
    this.idade
}

public getmatricula(): number{
    return this.matricula
}

public getsalario(): number{
    return this.salario
}
public setsalario(value: number): void{
    if (value <= 0) {
        console.log("Erro: Salário inválido! O valor deve ser maior que zero.");
        return;
      }
    this.salario
}

public getCargo(): string {
    return this.cargo;
  }

  public trabalhar(): void {
    console.log(`${this.name} está realizando suas funções gerais.`);
  }

  public exibirDados(): void {
    console.log(`Nome: ${this.name} | Matrícula: ${this.matricula} | Cargo: ${this.cargo} | Salário: R$ ${this.salario.toFixed(2)}`);
  }

public getId(): number{ 
    return this.getmatricula();
}
}