import { Injectable } from '@angular/core';
import { Produto } from '../produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() {
    this.carregar();
   }

  public produtos:Array<Produto> = [];

  carregar(){
    this.produtos = JSON.parse(String(localStorage.getItem('produto')));
    
  }

  excluir(indice:number){
    this.produtos.splice(indice,1);
    this.salvar();
  }  

  salvar(){
    localStorage.setItem('produto',JSON.stringify(this.produtos));
  }

  update(indice:number,produto:Produto){
    this.produtos[indice] = produto;
    this.salvar();
  }

  // registro(indice:number){
  //   this.produtos = this.carregar();
  //   return this.produtos[indice];
  // }  

  get(produto_id:number){
    return this.produtos.find((produto:any)=>{
      if (produto.id == produto_id){
        return produto;
      }
    });
  }
}
