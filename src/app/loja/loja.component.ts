import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public produtos: Produto[] = [];
  
  constructor(
    public actived_route:ActivatedRoute,
    public produto_service:ProdutoService,
    private router: Router
  ){}


  ngOnInit(): void {
    
    this.produtos = this.produto_service.carregar();
    
  }

scrollToTop() {
  this.router.navigateByUrl('/todos-produtos')
    .then(() => window.scrollTo(0, 0));
}

}
