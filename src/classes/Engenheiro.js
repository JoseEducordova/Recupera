"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engenheiro = void 0;
const Funcionario_1 = require("./Funcionario");
const Cargo_1 = require("../enums/Cargo");
class Engenheiro extends Funcionario_1.Funcionario {
    constructor(name, idade, matricula, salario, crea) {
        super(name, idade, matricula, salario, Cargo_1.Cargo.Engenheiro);
        this.crea = crea;
    }
    getCrea() {
        return this.crea;
    }
    // Sobrescrita de método (Polimorfismo)
    trabalhar() {
        console.log(`${this.getname()} (CREA: ${this.crea}) está realizando uma análise técnica da estrutura da plataforma.`);
    }
}
exports.Engenheiro = Engenheiro;
