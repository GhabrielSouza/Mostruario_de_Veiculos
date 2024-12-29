import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarouselComponent } from '../../carousel/carousel.component';
import { ICarouselImagem } from '../../../interface/ICarouselImagem.interface';
import { ICarroDescricao } from '../../../interface/ICarroDescricao.interface';
import { GetCarrosService } from '../../../../../service/get-carros.service';
import { concatMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormCadastroCarroComponent } from '../../form/form-cadastro-carro/form-cadastro-carro.component';
import { EDialogPanelClass } from '../../../enum/EDialogPanelClass.enum';
import { IDialogFormCarro } from '../../../interface/IDialogFormCarro.interface';
import { ConfirmDialogComponent } from '../../dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-cards-carro',
  imports: [DatePipe, RouterLink, CarouselComponent],
  templateUrl: './cards-carro.component.html',
  styleUrl: './cards-carro.component.scss',
})
export class CardsCarroComponent implements OnInit {
  #router = inject(Router);
  #apiService = inject(GetCarrosService);
  #dialog = inject(MatDialog);

  public getListCarros = this.#apiService.ListCarros;

  public httpDeleteCarro(id: number): void {
    const dialogRef = this.#dialog.open(ConfirmDialogComponent, {
      data: 'Tem certeza que deseja excluir este carro?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.#apiService
          .httpDeleteCarro$(id)
          .pipe(concatMap(() => this.#apiService.httpListCarros$()))
          .subscribe();
      }
    });
  }

  public ngOnInit(): void {
    this.#apiService.httpListCarros$().subscribe();
  }

  public isListagemDeVeiculos() {
    return this.#router.url === '/listagem-veiculos';
  }

  public carrosSemiNovos = signal<Array<ICarroDescricao>>([
    {
      id: 4,
      nome: 'HYUNDAI CRETA',
      modelo: 'HYUNDAI',
      ano: 2023,
      anoFabricacao: 2022,
      anoModelo: 2023,
      cor: 'Preto',
      preco: 149990.0,
      quilometragem: 456.52,
      cilindradas: 1.6,
      estadoDoCarro: 'Novo',
      cambio: 'Automático',
      finalDaPlaca: 5,
      descricao: 'SUV compacto com ótimo espaço interno e conforto.',
      combustivel: 'Gasolina',
      itens: ['Ar condicionado, Airbags, Freios ABS, Multimídia'],
      loja: 'Copacabana',
      marca: 'Hyundai',
    },
    {
      id: 1,
      nome: 'Fiat Uno',
      modelo: 'FIAT',
      ano: 2023,
      anoFabricacao: 2022,
      anoModelo: 2023,
      cor: 'Branco',
      preco: 89990.0,
      quilometragem: 1234.56,
      cilindradas: 1.0,
      estadoDoCarro: 'Usado',
      cambio: 'Manual',
      finalDaPlaca: 7,
      descricao: 'Compacto ideal para cidade, econômico e ágil.',
      combustivel: 'Flex',
      itens: ['Vidros elétricos, Travas elétricas, Direção hidráulica'],
      loja: 'Copacabana',
      marca: 'Fiat',
    },
    {
      id: 1,
      nome: 'Hyundai HB20',
      modelo: 'HYUNDAI',
      ano: 2023,
      anoFabricacao: 2022,
      anoModelo: 2023,
      cor: 'Prata',
      preco: 95990.0,
      quilometragem: 789.45,
      cilindradas: 1.6,
      estadoDoCarro: 'Novo',
      cambio: 'Automático',
      finalDaPlaca: 3,
      descricao: 'Hatch moderno com design arrojado e tecnologia avançada.',
      combustivel: 'Flex',
      itens: ['Sensor de estacionamento, Multimídia, Câmera de ré'],
      loja: 'Copacabana',
      marca: 'Hyundai',
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

  public openDialog(data: IDialogFormCarro): void {
    this.#dialog.open(FormCadastroCarroComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
