import { Component, Inject, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { IDialogFormMarca } from '../../../interface/IDialogFormMarca.interface';

@Component({
  selector: 'app-form-cadastro-marca',
  imports: [MatDialogModule],
  templateUrl: './form-cadastro-marca.component.html',
  styleUrl: './form-cadastro-marca.component.scss',
})
export class FormCadastroMarcaComponent {
  constructor(
    private _dialogRef: MatDialogRef<FormCadastroMarcaComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IDialogFormMarca
  ) {}

  public getData = signal<IDialogFormMarca | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public cadastrarMarca(): void {}

  public closeModal(): void {
    return this._dialogRef.close();
  }
}
