import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, shareReplay, tap } from 'rxjs';
import { IDialogFormMarca } from '../modules/concessionaria/interface/IDialogFormMarca.interface';

@Injectable({
  providedIn: 'root',
})
export class CrudMarcasService {
  #http = inject(HttpClient);
  #url = signal(environment.apiGetMarcas);

  #setListMarcas = signal<null | Array<IDialogFormMarca>>(null);
  get ListMarcas() {
    return this.#setListMarcas.asReadonly();
  }

  public httpListMarcas$(): Observable<Array<IDialogFormMarca>> {
    return this.#http.get<Array<IDialogFormMarca>>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListMarcas.set(res))
    );
  }

  #setListMarcasId = signal<null | Array<IDialogFormMarca>>(null);
  get ListMarcasId() {
    return this.#setListMarcasId.asReadonly();
  }

  public httpListMarcasId$(id: number): Observable<Array<IDialogFormMarca>> {
    return this.#http.get<Array<IDialogFormMarca>>(`${this.#url()}/${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setListMarcasId.set(res))
    );
  }

  public httpCreateMarcas$(
    id: number | null | undefined,
    nome: string | null | undefined
  ): Observable<IDialogFormMarca> {
    return this.#http
      .post<IDialogFormMarca>(this.#url(), {
        id,
        nome,
      })
      .pipe(shareReplay());
  }

  public httpUpdateMarcas$(
    id: number | null | undefined,
    nome: string | null | undefined
  ): Observable<IDialogFormMarca> {
    return this.#http
      .put<IDialogFormMarca>(`${this.#url()}/${id}`, {
        nome,
      })
      .pipe(shareReplay());
  }

  public httpDeleteMarcas$(id: number): Observable<void> {
    return this.#http
      .delete<void>(`${this.#url()}/${id}`, {})
      .pipe(shareReplay());
  }
}
