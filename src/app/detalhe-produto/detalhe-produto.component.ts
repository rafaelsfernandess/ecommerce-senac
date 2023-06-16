import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent {
  public produto:any;
  constructor(
    public activated_route:ActivatedRoute,
    public produto_service:ProdutoService
  ){}

  ngOnInit(): void {
    this.carregar();
  }

  carregar(){
    this.activated_route.params
    .subscribe((_params:any) => {
      this.produto = this.produto_service.get(_params.id)
    })
  }

}
