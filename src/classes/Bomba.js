"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bomba = void 0;
const Equipamento_1 = require("./Equipamento");
const StatusEquipamento_1 = require("../enums/StatusEquipamento");
// Múltiplas interfaces implementadas (Requisito 10)
class Bomba extends Equipamento_1.Equipamento {
    constructor(codigo, nome, marca, vazao, status) {
        super(codigo, nome, marca, status);
        this.vazaoLitrosPorSegundo = vazao;
    }
    getVazao() {
        return this.vazaoLitrosPorSegundo;
    }
    // Sobrescrita de operar() - Polimorfismo
    operar() {
        if (this.status === StatusEquipamento_1.StatusEquipamento.Danificado) {
            console.log(`⚠️ ERRO: A bomba ${this.getNome()} está DANIFICADA e não pode operar!`);
            return;
        }
        console.log(`⚙️ A bomba ${this.getNome()} (${this.getCodigo()}) está bombeando petróleo a ${this.vazaoLitrosPorSegundo} L/s.`);
    }
    // Implementação do método da interface Operacao
    iniciarOperacao() {
        console.log(`🚀 Iniciando o fluxo de bombeamento da bomba ${this.getNome()}...`);
        this.setStatus(StatusEquipamento_1.StatusEquipamento.Operacional);
    }
    // Implementação do método da interface Manutencao
    realizarManutencao() {
        console.log(`🔧 Realizando a troca de vedações e revisão mecânica na bomba ${this.getNome()}...`);
        this.setStatus(StatusEquipamento_1.StatusEquipamento.Operacional);
    }
}
exports.Bomba = Bomba;
