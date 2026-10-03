"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipamento = void 0;
const StatusEquipamento_1 = require("../enums/StatusEquipamento");
class Equipamento {
    constructor(codigo, nome, marca, status = StatusEquipamento_1.StatusEquipamento.Operacional) {
        if (!codigo || codigo.trim() === "") {
            throw new Error("Erro: O código do equipamento não pode estar vazio!");
        }
        this.codigo = codigo;
        this.nome = nome;
        this.marca = marca;
        this.status = status;
    }
    // Getters e Setters
    getCodigo() {
        return this.codigo;
    }
    getNome() {
        return this.nome;
    }
    getMarca() {
        return this.marca;
    }
    getStatus() {
        return this.status;
    }
    setStatus(novoStatus) {
        this.status = novoStatus;
    }
    // Método polimórfico (será sobrescrito nas subclasses)
    operar() {
        console.log(`O equipamento ${this.nome} (${this.codigo}) está em funcionamento básico.`);
    }
    exibirInformacoes() {
        console.log(`[${this.codigo}] ${this.nome} | Marca: ${this.marca} | Status: ${this.status}`);
    }
    getId() {
        return this.getCodigo();
    }
}
exports.Equipamento = Equipamento;
