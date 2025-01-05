import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, shareReplay, tap } from 'rxjs';
import { ICarroDescricao } from '../modules/concessionaria/interface/ICarroDescricao.interface';
import { IDialogFormCarro } from '../modules/concessionaria/interface/IDialogFormCarro.interface';

@Injectable({
  providedIn: 'root',
})
export class GetCarrosService {
  #http = inject(HttpClient);
  #url = signal(environment.apiGetCarro);

  #setListCarros = signal<null | Array<ICarroDescricao>>(null);
  get ListCarros() {
    return this.#setListCarros.asReadonly();
  }

  public httpListCarros$(): Observable<Array<ICarroDescricao>> {
    return this.#http.get<Array<ICarroDescricao>>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListCarros.set(res))
    );
  }

  #setListCarrosId = signal<null | Array<ICarroDescricao>>(null);
  get ListCarrosId() {
    return this.#setListCarrosId.asReadonly();
  }

  public httpListCarrosId$(id: number): Observable<Array<ICarroDescricao>> {
    return this.#http.get<Array<ICarroDescricao>>(`${this.#url()}/${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setListCarrosId.set(res))
    );
  }

  public httpCreateCarro$(
    nome: string | null | undefined,
    modelo: string | null | undefined,
    ano: number | null | undefined,
    cor: string | null | undefined,
    preco: number | null | undefined,
    quilometragem: number | null | undefined,
    cilindradas: number | null | undefined,
    estadoDoCarro: string | null | undefined,
    cambio: string | null | undefined,
    finalDaPlaca: number | null | undefined,
    descricao: string | null | undefined,
    combustivel: string | null | undefined,
    itens: string | null | undefined,
    loja: string | null | undefined,
    marca: string | null | undefined,
    file: File | null | undefined
  ): Observable<IDialogFormCarro> {
    const formData = new FormData();

    // Adicionar campos de texto
    formData.append('nome', nome || '');
    formData.append('modelo', modelo || '');
    formData.append('ano', ano?.toString() || '');
    formData.append('cor', cor || '');
    formData.append('preco', preco?.toString() || '');
    formData.append('quilometragem', quilometragem?.toString() || '');
    formData.append('cilindradas', cilindradas?.toString() || '');
    formData.append('estadoDoCarro', estadoDoCarro || '');
    formData.append('cambio', cambio || '');
    formData.append('finalDaPlaca', finalDaPlaca?.toString() || '');
    formData.append('descricao', descricao || '');
    formData.append('combustivel', combustivel || '');
    formData.append('itens', itens || '');
    formData.append('loja', loja || '');
    formData.append('marca', marca || '');

    // Adicionar arquivo, se existir
    if (file) {
      formData.append('imagem', file, file.name);
    }

    return this.#http
      .post<IDialogFormCarro>(this.#url(), formData)
      .pipe(shareReplay());
  }

  public httpUpdateCarro$(
    id: number | null | undefined,
    nome: string | null | undefined,
    modelo: string | null | undefined,
    ano: number | null | undefined,
    cor: string | null | undefined,
    preco: number | null | undefined,
    quilometragem: number | null | undefined,
    cilindradas: number | null | undefined,
    estadoDoCarro: string | null | undefined,
    cambio: string | null | undefined,
    finalDaPlaca: number | null | undefined,
    descricao: string | null | undefined,
    combustivel: string | null | undefined,
    itens: string | null | undefined,
    loja: string | null | undefined,
    marca: string | null | undefined,
    file: File | null | undefined
  ): Observable<IDialogFormCarro> {
    const formData = new FormData();

    // Adicionar campos de texto
    formData.append('nome', nome || '');
    formData.append('modelo', modelo || '');
    formData.append('ano', ano?.toString() || '');
    formData.append('cor', cor || '');
    formData.append('preco', preco?.toString() || '');
    formData.append('quilometragem', quilometragem?.toString() || '');
    formData.append('cilindradas', cilindradas?.toString() || '');
    formData.append('estadoDoCarro', estadoDoCarro || '');
    formData.append('cambio', cambio || '');
    formData.append('finalDaPlaca', finalDaPlaca?.toString() || '');
    formData.append('descricao', descricao || '');
    formData.append('combustivel', combustivel || '');
    formData.append('itens', itens || '');
    formData.append('loja', loja || '');
    formData.append('marca', marca || '');

    // Adicionar arquivo, se existir
    if (file) {
      formData.append('imagem', file, file.name);
    }

    return this.#http
      .put<IDialogFormCarro>(this.#url(), formData)
      .pipe(shareReplay());
  }

  public httpDeleteCarro$(id: number): Observable<void> {
    return this.#http
      .delete<void>(`${this.#url()}/${id}`, {})
      .pipe(shareReplay());
  }
}
