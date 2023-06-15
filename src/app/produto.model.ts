
export class Produto {

    private id: number;
    public descricao: string;
    public valor: number;
    public foto: string;
    public destaque: number;
  
    constructor(id: number, descricao: string, valor: number, foto: string, destaque: number) {
      this.id = id;
      this.descricao = descricao;
      this.valor = valor;
      this.foto = foto;
      this.destaque = destaque;
    }
  
    getId(): number {
      return this.id;
    }

    getDescricao(): string {
        return this.descricao;
    }
  
    getValor(): number {
      return this.valor;
    }

    getFoto(): string {
        return this.foto;
    }

    getDestaque(): number {
      return this.destaque;
  }
    
}
