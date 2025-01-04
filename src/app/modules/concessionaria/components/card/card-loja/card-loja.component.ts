import { Component, inject, OnInit } from '@angular/core';
import { CrudLojasService } from '../../../../../service/crud-lojas.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../dialog/confirm-dialog/confirm-dialog.component';
import { concatMap } from 'rxjs';
import { IDialogFormLoja } from '../../../interface/IDialogFormLoja.interface';
import { FormCadastroLojaComponent } from '../../form/form-cadastro-loja/form-cadastro-loja.component';
import { EDialogPanelClass } from '../../../enum/EDialogPanelClass.enum';

@Component({
  selector: 'app-card-loja',
  imports: [],
  templateUrl: './card-loja.component.html',
  styleUrl: './card-loja.component.scss',
})
export class CardLojaComponent implements OnInit {
  #apiService = inject(CrudLojasService);
  #dialog = inject(MatDialog);

  public getListLojas = this.#apiService.ListLojas;
  public getListLojasId = this.#apiService.ListLojasId;

  ngOnInit(): void {
    this.#apiService.httpListLojas$().subscribe();
  }

  public httpDeleteLoja(id: number): void {
    const dialogRef = this.#dialog.open(ConfirmDialogComponent, {
      data: 'Tem certeza que deseja excluir esta loja?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.#apiService
          .httpDeleteLojas$(id)
          .pipe(concatMap(() => this.#apiService.httpListLojas$()))
          .subscribe();
      }
    });
  }

  public openDialog(data: IDialogFormLoja): void {
    this.#dialog.open(FormCadastroLojaComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
