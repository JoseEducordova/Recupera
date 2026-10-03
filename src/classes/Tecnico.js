"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tecnico = void 0;
const Funcionario_1 = require("./Funcionario");
const Cargo_1 = require("../enums/Cargo");
class Tecnico extends Funcionario_1.Funcionario {
    constructor(name, idade, matricula, salario, especialidade) {
        super(name, idade, matricula, salario, Cargo_1.Cargo.Tecnico);
        this.especialidade = especialidade;
    }
    getEspecialidade() {
        return this.especialidade;
    }
    // Sobrescrita de método (Polimorfismo)
    trabalhar() {
        console.log(`${this.getname()} está realizando manutenção especializada em ${this.especialidade}.`);
    }
}
exports.Tecnico = Tecnico;
