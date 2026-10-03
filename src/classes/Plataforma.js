"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plataforma = void 0;
const StatusPlataforma_1 = require("../enums/StatusPlataforma");
const Gerenciador_1 = require("../generics/Gerenciador");
class Plataforma {
    constructor(nome, localizacao, capacidadeProducaoDiaria) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.capacidadeProducaoDiaria = capacidadeProducaoDiaria;
        this.status = StatusPlataforma_1.StatusPlataforma.Operando;
        this.gerenciadorFuncionarios = new Gerenciador_1.Gerenciador();
        this.gerenciadorEquipamentos = new Gerenciador_1.Gerenciador();
    }
    // Getters e Setters
    getNome() {
        return this.nome;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    // Iniciar e encerrar operações da plataforma (Requisito 18)
    iniciarOperacao() {
        if (this.status === StatusPlataforma_1.StatusPlataforma.Desativada) {
            console.log("❌ A plataforma está Desativada e não pode iniciar operações!");
            return;
        }
        if (this.status === StatusPlataforma_1.StatusPlataforma.Emergência) {
            console.log("🚨 A plataforma está em EMERGÊNCIA! Operações bloqueadas.");
            return;
        }
        this.status = StatusPlataforma_1.StatusPlataforma.Operando;
        console.log(`✅ Operações iniciadas com sucesso na plataforma ${this.nome}.`);
    }
    encerrarOperacao() {
        this.status = StatusPlataforma_1.StatusPlataforma.Desativada;
        console.log(`🛑 A plataforma ${this.nome} foi Desativada temporariamente.`);
    }
    // Exibir resumo da plataforma
    exibirInformacoes() {
        console.log(`\n========================================`);
        console.log(` 🛢️ PLATAFORMA: ${this.nome}`);
        console.log(`========================================`);
        console.log(`📍 Localização: ${this.localizacao}`);
        console.log(`📊 Capacidade Máxima: ${this.capacidadeProducaoDiaria} barris/dia`);
        console.log(`🔴 Status Atual: ${this.status}`);
        console.log(`👥 Total de Funcionários: ${this.gerenciadorFuncionarios.listarTodos().length}`);
        console.log(`⚙️ Total de Equipamentos: ${this.gerenciadorEquipamentos.listarTodos().length}`);
        console.log(`========================================\n`);
    }
}
exports.Plataforma = Plataforma;
