"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tanque = void 0;
const Equipamento_1 = require("./Equipamento");
class Tanque extends Equipamento_1.Equipamento {
    constructor(codigo, nome, marca, capacidadeLitros, status) {
        super(codigo, nome, marca, status);
        this.capacidadeLitros = capacidadeLitros;
        this.volumeAtual = 0;
    }
    getCapacidade() {
        return this.capacidadeLitros;
    }
    getVolumeAtual() {
        return this.volumeAtual;
    }
    // Sobrescrita de operar() - Polimorfismo
    operar() {
        console.log(`🛢️ O tanque ${this.getNome()} (${this.getCodigo()}) está armazenando ${this.volumeAtual}L / ${this.capacidadeLitros}L de petróleo.`);
    }
}
exports.Tanque = Tanque;
