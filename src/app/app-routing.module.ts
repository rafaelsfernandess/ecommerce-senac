import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LojaComponent } from './loja/loja.component';
import { BlogComponent } from './blog/blog.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';

const routes: Routes = [
    { path:'', component:HomeComponent},
    { path:'home', component:HomeComponent},
    { path:'loja', component:LojaComponent},
    { path:'produto/:id', component:DetalheProdutoComponent},
    { path:'blog', component:BlogComponent}
  ];

  @NgModule({  
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
  })
  
  export class AppRoutingModule { }