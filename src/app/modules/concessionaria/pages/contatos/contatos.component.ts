import { Component } from '@angular/core';
import { CardsCarroComponent } from '../../components/card/cards-carro/cards-carro.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FormContatosComponent } from '../../components/form/form-contatos/form-contatos.component';

@Component({
  selector: 'app-contatos',
  imports: [
    HeaderComponent,
    FooterComponent,
    CardsCarroComponent,
    FormContatosComponent,
  ],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.scss',
})
export class ContatosComponent {}
