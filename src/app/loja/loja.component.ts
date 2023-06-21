import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../produto.model';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {
  public produtos: Produto[] = [
    new Produto(1, "Teste", 90.34, "../assets/images-produtos/touca.jpg",0),
    new Produto(2, "Camisa", 230.80, "../assets/images-produtos/camisa.jpg",1),
    new Produto(3, "Jaqueta", 320.33, "../assets/images-produtos/jaqueta.jpg",1)
  ]
  
  constructor(
    public actived_route:ActivatedRoute,
    public produto_service:ProdutoService,

  ){}


  ngOnInit(): void {
    
    this.produtos = this.produto_service.carregar();
    
  }

  
}
