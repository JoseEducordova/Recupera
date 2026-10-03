"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerenciador = exports.Gerador = void 0;
const Equipamento_1 = require("./Equipamento");
const StatusEquipamento_1 = require("../enums/StatusEquipamento");
class Gerador extends Equipamento_1.Equipamento {
    constructor(codigo, nome, marca, potenciaKW, status) {
        super(codigo, nome, marca, status);
        this.potenciaKW = potenciaKW;
    }
    getPotencia() {
        return this.potenciaKW;
    }
    // Sobrescrita de operar() - Polimorfismo
    operar() {
        if (this.status === StatusEquipamento_1.StatusEquipamento.Danificado) {
            console.log(`⚠️ ERRO: O gerador ${this.getNome()} está Danificado!`);
            return;
        }
        console.log(`⚡ O gerador ${this.getNome()} (${this.getCodigo()}) está gerando ${this.potenciaKW} kW de energia.`);
    }
    // Implementação do método da interface Manutencao
    realizarManutencao() {
        console.log(`🔧 Substituindo óleo e testando circuitos do gerador ${this.getNome()}...`);
        this.setStatus(StatusEquipamento_1.StatusEquipamento.Operacional);
    }
}
exports.Gerador = Gerador;
// Classe Genérica que só aceita tipos T que implementem Identificavel (Requisito 13, 14 e 15)
class Gerenciador {
    constructor() {
        this.itens = [];
    }
    // 1. Adicionar item
    adicionar(item) {
        // Verifica se já existe um item com o mesmo ID
        const existe = this.itens.some(i => i.getId() === item.getId());
        if (existe) {
            console.log(`⚠️ Erro: Já existe um elemento cadastrado com a identificação '${item.getId()}'.`);
            return;
        }
        this.itens.push(item);
    }
    // 2. Remover item por ID
    remover(id) {
        const indice = this.itens.findIndex(item => item.getId() === id);
        if (indice !== -1) {
            this.itens.splice(indice, 1);
            return true;
        }
        return false;
    }
    // 3. Listar todos
    listarTodos() {
        return this.itens;
    }
    // 4. Busca Genérica por função de condição (Requisito 14)
    buscar(condicao) {
        return this.itens.filter(condicao);
    }
    // 5. Obter por ID direto
    obterPorId(id) {
        return this.itens.find(item => item.getId() === id);
    }
}
exports.Gerenciador = Gerenciador;
