"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operador = void 0;
const Funcionario_1 = require("./Funcionario");
const Cargo_1 = require("../enums/Cargo");
class Operador extends Funcionario_1.Funcionario {
    constructor(name, idade, matricula, salario, turno) {
        // 'super' chama o construtor da classe pai (Funcionario)
        super(name, idade, matricula, salario, Cargo_1.Cargo.Operador);
        this.turno = turno;
    }
    getTurno() {
        return this.turno;
    }
    // Sobrescrita de método (Polimorfismo)
    trabalhar() {
        console.log(`${this.getname()} está operando os equipamentos do turno da ${this.turno}.`);
    }
}
exports.Operador = Operador;
