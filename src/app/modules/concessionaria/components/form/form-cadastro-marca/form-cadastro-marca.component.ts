import { Component, inject, Inject, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { IDialogFormMarca } from '../../../interface/IDialogFormMarca.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CrudMarcasService } from '../../../../../service/crud-marcas.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-form-cadastro-marca',
  imports: [MatDialogModule, ReactiveFormsModule],
  templateUrl: './form-cadastro-marca.component.html',
  styleUrl: './form-cadastro-marca.component.scss',
})
export class FormCadastroMarcaComponent {
  constructor(
    private _dialogRef: MatDialogRef<FormCadastroMarcaComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IDialogFormMarca
  ) {}

  #apiService = inject(CrudMarcasService);
  #fb = inject(FormBuilder);

  public marcaForm = this.#fb.group({
    id: [0],
    nome: ['', [Validators.required, Validators.maxLength(255)]],
  });

  public getData = signal<IDialogFormMarca | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal(): void {
    return this._dialogRef.close();
  }

  public httpCreateMarca() {
    return this.#apiService
      .httpCreateMarcas$(this.marcaForm.value.id, this.marcaForm.value.nome)
      .pipe(concatMap(() => this.#apiService.httpListMarcas$()))
      .subscribe({
        next: () => {
          // Fechar o modal com retorno de sucesso
          this._dialogRef.close({ sucesso: true });
        },
        error: (error) => {
          // Lidar com erros (exibir mensagem ou logar)
          console.error('Erro ao criar carro:', error);
        },
        complete: () => {
          console.log('Requisição concluída.');
        },
      });
  }
}
