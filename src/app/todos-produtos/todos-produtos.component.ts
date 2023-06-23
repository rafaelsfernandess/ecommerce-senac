import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-todos-produtos',
  templateUrl: './todos-produtos.component.html',
  styleUrls: ['./todos-produtos.component.css']
})
export class TodosProdutosComponent {
  public produtos: Produto[] = [];
  
  constructor(
    public actived_route:ActivatedRoute,
    public produto_service:ProdutoService,

  ){}
  
  ngOnInit(): void {
    
    this.produtos = this.produto_service.carregar();
    
  }
}
