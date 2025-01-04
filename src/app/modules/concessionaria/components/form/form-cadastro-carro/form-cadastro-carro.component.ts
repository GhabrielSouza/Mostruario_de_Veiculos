import { Component, inject, Inject, OnInit, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { IDialogFormCarro } from '../../../interface/IDialogFormCarro.interface';
import { concatMap } from 'rxjs';
import { GetCarrosService } from '../../../../../service/get-carros.service';
import { ICarroDescricao } from '../../../interface/ICarroDescricao.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CrudLojasService } from '../../../../../service/crud-lojas.service';
import { CrudMarcasService } from '../../../../../service/crud-marcas.service';

@Component({
  selector: 'app-form-cadastro-carro',
  imports: [MatDialogModule, ReactiveFormsModule],
  templateUrl: './form-cadastro-carro.component.html',
  styleUrl: './form-cadastro-carro.component.scss',
})
export class FormCadastroCarroComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<FormCadastroCarroComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) {}

  #apiService = inject(GetCarrosService);
  #apiServiceLoja = inject(CrudLojasService);
  #apiServiceMarca = inject(CrudMarcasService);
  #fb = inject(FormBuilder);

  public carroForm = this.#fb.group({
    id: [0],
    nome: ['', Validators.required],
    modelo: ['', Validators.required],
    ano: [, [Validators.required, Validators.min(1900), Validators.max(2099)]],
    cor: ['', Validators.required],
    preco: [, [Validators.required, Validators.min(0)]],
    quilometragem: [, [Validators.required, Validators.min(0)]],
    cilindradas: [, [Validators.required, Validators.min(0)]],
    estadoDoCarro: ['', Validators.required],
    cambio: ['', Validators.required],
    finalDaPlaca: [, [Validators.required]],
    descricao: ['', Validators.required],
    combustivel: ['', Validators.required],
    itens: ['', Validators.required],
    loja: ['', Validators.required],
    marca: ['', Validators.required],
    imagem: [, Validators.required],
  });

  public getData = signal<IDialogFormCarro | null>(null);

  public getListLojas = this.#apiServiceLoja.ListLojas;

  public getListMarcas = this.#apiServiceMarca.ListMarcas;

  public closeModal(): void {
    return this._dialogRef.close();
  }

  ngOnInit(): void {
    this.getData.set(this._data);

    if (this._data) {
      this.carroForm.patchValue(this._data);
    }

    this.#apiServiceLoja.httpListLojas$().subscribe();
    this.#apiServiceMarca.httpListMarcas$().subscribe();
  }

  public httpCreateCarro() {
    return this.#apiService
      .httpCreateCarro$(
        this.carroForm.value.nome,
        this.carroForm.value.modelo,
        this.carroForm.value.ano,
        this.carroForm.value.cor,
        this.carroForm.value.preco,
        this.carroForm.value.quilometragem,
        this.carroForm.value.cilindradas,
        this.carroForm.value.estadoDoCarro,
        this.carroForm.value.cambio,
        this.carroForm.value.finalDaPlaca,
        this.carroForm.value.descricao,
        this.carroForm.value.combustivel,
        this.carroForm.value.itens,
        this.carroForm.value.loja,
        this.carroForm.value.marca,
        this.carroForm.value.imagem
      )
      .pipe(concatMap(() => this.#apiService.httpListCarros$()))
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

  public httpUpdateCarro() {
    return this.#apiService
      .httpUpdateCarro$(
        this.carroForm.value.id,
        this.carroForm.value.nome,
        this.carroForm.value.modelo,
        this.carroForm.value.ano,
        this.carroForm.value.cor,
        this.carroForm.value.preco,
        this.carroForm.value.quilometragem,
        this.carroForm.value.cilindradas,
        this.carroForm.value.estadoDoCarro,
        this.carroForm.value.cambio,
        this.carroForm.value.finalDaPlaca,
        this.carroForm.value.descricao,
        this.carroForm.value.combustivel,
        this.carroForm.value.itens,
        this.carroForm.value.loja,
        this.carroForm.value.marca,
        this.carroForm.value.imagem
      )
      .pipe(concatMap(() => this.#apiService.httpListCarros$()))
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
}
