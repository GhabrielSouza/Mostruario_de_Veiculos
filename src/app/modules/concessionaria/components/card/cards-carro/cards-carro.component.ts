import { DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../../carousel/carousel.component';
import { ICarouselImagem } from '../../../interface/ICarouselImagem.interface';
import { FormCadastroCarroComponent } from '../../form/form-cadastro-carro/form-cadastro-carro.component';
import { EDialogPanelClass } from '../../../enum/EDialogPanelClass.enum';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards-carro',
  standalone: true,
  imports: [DatePipe, RouterLink, CarouselComponent],
  templateUrl: './cards-carro.component.html',
  styleUrl: './cards-carro.component.scss',
})
export class CardsCarroComponent {
  public carrosNovos = signal<
    Array<{
      nome: string;
      quilometragem: number;
      ano: Date;
      valor: number;
      qtdLojas: number;
    }>
  >([
    {
      nome: 'HYUNDAI CRETA',
      quilometragem: 456.52,
      ano: new Date(),
      valor: 149990.0,
      qtdLojas: 2,
    },
    {
      nome: 'Fiat Uno',
      quilometragem: 456.52,
      ano: new Date(),
      valor: 89990.0,
      qtdLojas: 2,
    },
    {
      nome: 'Hyundai HB20',
      quilometragem: 456.52,
      ano: new Date(),
      valor: 95990.0,
      qtdLojas: 2,
    },
  ]);

  public carrosSemiNovos = signal<
    Array<{
      nome: string;
      quilometragem: number;
      ano: Date;
      valor: number;
      qtdLojas: number;
    }>
  >([
    {
      nome: 'HYUNDAI CRETA',
      quilometragem: 456.52,
      ano: new Date(),
      valor: 149990.0,
      qtdLojas: 2,
    },
    {
      nome: 'Fiat Uno',
      quilometragem: 456.52,
      ano: new Date(),
      valor: 89990.0,
      qtdLojas: 2,
    },
    {
      nome: 'Hyundai HB20',
      quilometragem: 456.52,
      ano: new Date(),
      valor: 95990.0,
      qtdLojas: 2,
    },
  ]);

  public imagens = signal<Array<ICarouselImagem>>([
    {
      imagemSrc: 'assets/imgs/carros/carro1.webp',
      imagemAlt: 'Carro 1',
    },
    {
      imagemSrc: 'assets/imgs/carros/carro2.jpeg',
      imagemAlt: 'Carro 2',
    },
    {
      imagemSrc: 'assets/imgs/carros/carro3.webp',
      imagemAlt: 'Carro 3',
    },
  ]);

  #dialog = inject(MatDialog);

  public openDialog(): void {
    this.#dialog.open(FormCadastroCarroComponent, {
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
