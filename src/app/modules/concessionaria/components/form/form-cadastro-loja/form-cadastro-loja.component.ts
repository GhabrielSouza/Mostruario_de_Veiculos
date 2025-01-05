import { Component, inject, Inject, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { IDialogFormLoja } from '../../../interface/IDialogFormLoja.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { concatMap } from 'rxjs';
import { CrudLojasService } from '../../../../../service/crud-lojas.service';

@Component({
  selector: 'app-form-cadastro-loja',
  imports: [MatDialogModule, ReactiveFormsModule],
  templateUrl: './form-cadastro-loja.component.html',
  styleUrl: './form-cadastro-loja.component.scss',
})
export class FormCadastroLojaComponent {
  constructor(
    private _dialogRef: MatDialogRef<FormCadastroLojaComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IDialogFormLoja
  ) {}

  #apiService = inject(CrudLojasService);
  #fb = inject(FormBuilder);

  public lojaForm = this.#fb.group({
    id: [0],
    nome: ['', [Validators.required, Validators.maxLength(255)]],
    endereco: ['', [Validators.required, Validators.maxLength(255)]],
    parceiros: ['', [Validators.required, Validators.maxLength(255)]],
  });

  public getData = signal<IDialogFormLoja | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);

    if (this._data) {
      this.lojaForm.patchValue(this._data);
    }
  }

  public httpCreateLoja() {
    return this.#apiService
      .httpCreateLojas$(
        this.lojaForm.value.id,
        this.lojaForm.value.nome,
        this.lojaForm.value.endereco,
        this.lojaForm.value.parceiros
      )
      .pipe(concatMap(() => this.#apiService.httpListLojas$()))
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

  public httpUpdateLoja() {
    return this.#apiService
      .httpUpdateLojas$(
        this.lojaForm.value.id,
        this.lojaForm.value.nome,
        this.lojaForm.value.endereco,
        this.lojaForm.value.parceiros
      )
      .pipe(concatMap(() => this.#apiService.httpListLojas$()))
      .subscribe({
        next: () => {
          // Fechar o modal com retorno de sucesso
          this._dialogRef.close({ sucesso: true });
        },
        error: (error) => {
          // Lidar com erros (exibir mensagem ou logar)
          console.error('Erro ao editar carro:', error);
        },
        complete: () => {
          console.log('Requisição concluída.');
        },
      });
  }

  public closeModal(): void {
    return this._dialogRef.close();
  }
}
