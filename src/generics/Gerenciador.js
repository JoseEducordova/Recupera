"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerenciador = void 0;
// Classe Genérica que gerencia qualquer tipo que implemente Identificavel
class Gerenciador {
    constructor() {
        this.itens = [];
    }
    // Adiciona um novo item verificando duplicação de ID
    adicionar(item) {
        const existe = this.itens.some((i) => i.getId() === item.getId());
        if (existe) {
            console.log(`⚠️ Erro: Já existe um cadastro com o ID '${item.getId()}'.`);
            return;
        }
        this.itens.push(item);
    }
    // Remove um item pelo seu ID
    remover(id) {
        const indice = this.itens.findIndex((item) => item.getId() === id);
        if (indice !== -1) {
            this.itens.splice(indice, 1);
            return true;
        }
        return false;
    }
    // Retorna todos os itens cadastrados
    listarTodos() {
        return this.itens;
    }
    // Realiza busca utilizando uma função de condição (Requisito 14)
    buscar(condicao) {
        return this.itens.filter(condicao);
    }
    // Obtém um item específico pelo ID
    obterPorId(id) {
        return this.itens.find((item) => item.getId() === id);
    }
}
exports.Gerenciador = Gerenciador;
