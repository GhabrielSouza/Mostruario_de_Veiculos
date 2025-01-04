import { Routes } from '@angular/router';
import { HomeComponent } from './modules/concessionaria/pages/home/home.component';
import { DetalhesComponent } from './modules/concessionaria/pages/detalhes/detalhes.component';
import { ListaVeiculosComponent } from './modules/concessionaria/pages/lista-veiculos/lista-veiculos.component';
import { LojasComponent } from './modules/concessionaria/pages/lojas/lojas.component';
import { MarcasComponent } from './modules/concessionaria/pages/marcas/marcas.component';
import { ContatosComponent } from './modules/concessionaria/pages/contatos/contatos.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detalhes/:id',
    component: DetalhesComponent,
  },
  {
    path: 'listagem-veiculos',
    component: ListaVeiculosComponent,
  },
  {
    path: 'lojas',
    component: LojasComponent,
  },
  {
    path: 'marcas',
    component: MarcasComponent,
  },
  {
    path: 'contatos',
    component: ContatosComponent,
  },
];
