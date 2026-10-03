"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(name, idade, matricula, salario, cargo) {
        this.name = name;
        this.idade = idade;
        this.matricula = matricula;
        this.salario = salario;
        this.cargo = cargo;
    }
    getname() {
        return this.name;
    }
    setname(value) {
        this.name = value;
    }
    getidade() {
        return this.idade;
    }
    setidade(value) {
        if (value < 0) {
            console.log("Erro: A idade não pode ser negativa!");
            this.idade = 0;
            return;
        }
        this.idade;
    }
    getmatricula() {
        return this.matricula;
    }
    getsalario() {
        return this.salario;
    }
    setsalario(value) {
        if (value <= 0) {
            console.log("Erro: Salário inválido! O valor deve ser maior que zero.");
            return;
        }
        this.salario;
    }
    getCargo() {
        return this.cargo;
    }
    trabalhar() {
        console.log(`${this.name} está realizando suas funções gerais.`);
    }
    exibirDados() {
        console.log(`Nome: ${this.name} | Matrícula: ${this.matricula} | Cargo: ${this.cargo} | Salário: R$ ${this.salario.toFixed(2)}`);
    }
    getId() {
        return this.getmatricula();
    }
}
exports.Funcionario = Funcionario;
