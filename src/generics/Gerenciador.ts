// Interface de restrição para garantir que todo objeto manipulado possua um ID
export interface Identificavel {
    getId(): string | number;
  }
  
  // Classe Genérica que gerencia qualquer tipo que implemente Identificavel
  export class Gerenciador<T extends Identificavel> {
    private itens: T[] = [];
  
    // Adiciona um novo item verificando duplicação de ID
    public adicionar(item: T): void {
      const existe = this.itens.some((i) => i.getId() === item.getId());
      if (existe) {
        console.log(`⚠️ Erro: Já existe um cadastro com o ID '${item.getId()}'.`);
        return;
      }
      this.itens.push(item);
    }
  
    // Remove um item pelo seu ID
    public remover(id: string | number): boolean {
      const indice = this.itens.findIndex((item) => item.getId() === id);
      if (indice !== -1) {
        this.itens.splice(indice, 1);
        return true;
      }
      return false;
    }
  
    // Retorna todos os itens cadastrados
    public listarTodos(): T[] {
      return this.itens;
    }
  
    // Realiza busca utilizando uma função de condição (Requisito 14)
    public buscar(condicao: (item: T) => boolean): T[] {
      return this.itens.filter(condicao);
    }
  
    // Obtém um item específico pelo ID
    public obterPorId(id: string | number): T | undefined {
      return this.itens.find((item) => item.getId() === id);
    }
  }