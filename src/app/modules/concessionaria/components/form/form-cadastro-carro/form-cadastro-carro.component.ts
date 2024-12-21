import { Component, Inject, OnInit, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { IDialogFormCarro } from '../../../interface/IDialogFormCarro.interface';

@Component({
  selector: 'app-form-cadastro-carro',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './form-cadastro-carro.component.html',
  styleUrl: './form-cadastro-carro.component.scss',
})
export class FormCadastroCarroComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<FormCadastroCarroComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IDialogFormCarro
  ) {}

  public getData = signal<IDialogFormCarro | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public cadastrarCarro(): void {}

  public closeModal(): void {
    return this._dialogRef.close();
  }
}
