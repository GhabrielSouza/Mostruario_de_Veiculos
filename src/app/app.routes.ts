import { Routes } from '@angular/router';
import { HomeComponent } from './modules/concessionaria/pages/home/home.component';
import { DetalhesComponent } from './modules/concessionaria/pages/detalhes/detalhes.component';
import { ListaVeiculosComponent } from './modules/concessionaria/pages/lista-veiculos/lista-veiculos.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detalhes',
    component: DetalhesComponent,
  },
  {
    path: 'listagem-veiculos',
    component: ListaVeiculosComponent,
  },
];
