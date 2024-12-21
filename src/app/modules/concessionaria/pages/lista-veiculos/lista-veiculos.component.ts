import { Component, inject } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CardCarroIndividualComponent } from '../../components/card/card-carro-individual/card-carro-individual.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CardsCarroComponent } from '../../components/card/cards-carro/cards-carro.component';
import { FormCadastroCarroComponent } from '../../components/form/form-cadastro-carro/form-cadastro-carro.component';
import { MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

@Component({
  selector: 'app-lista-veiculos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardsCarroComponent],
  templateUrl: './lista-veiculos.component.html',
  styleUrl: './lista-veiculos.component.scss',
})
export class ListaVeiculosComponent {}
