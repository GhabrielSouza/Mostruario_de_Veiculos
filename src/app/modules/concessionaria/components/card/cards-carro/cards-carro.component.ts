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
  public getListCarrosId = this.#apiService.ListCarrosId;

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
