import { Component, Inject, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { IDialogFormLoja } from '../../../interface/IDialogFormLoja.interface';

@Component({
  selector: 'app-form-cadastro-loja',
  imports: [MatDialogModule],
  templateUrl: './form-cadastro-loja.component.html',
  styleUrl: './form-cadastro-loja.component.scss',
})
export class FormCadastroLojaComponent {
  constructor(
    private _dialogRef: MatDialogRef<FormCadastroLojaComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IDialogFormLoja
  ) {}

  public getData = signal<IDialogFormLoja | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public cadastrarLoja(): void {}

  public closeModal(): void {
    return this._dialogRef.close();
  }
}
