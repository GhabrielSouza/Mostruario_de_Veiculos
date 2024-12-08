import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormFiltragemMarcasComponent } from '../../components/form/form-filtragem-marcas/form-filtragem-marcas.component';
import { CardsCarroComponent } from '../../components/card/cards-carro/cards-carro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FormFiltragemMarcasComponent,
    CardsCarroComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
