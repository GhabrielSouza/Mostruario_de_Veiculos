import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { IDialogFormLoja } from '../modules/concessionaria/interface/IDialogFormLoja.interface';
import { Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudLojasService {
  #http = inject(HttpClient);
  #url = signal(environment.apiGetLojas);

  #setListLojas = signal<null | Array<IDialogFormLoja>>(null);
  get ListLojas() {
    return this.#setListLojas.asReadonly();
  }

  public httpListLojas$(): Observable<Array<IDialogFormLoja>> {
    return this.#http.get<Array<IDialogFormLoja>>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListLojas.set(res))
    );
  }

  #setListLojasId = signal<null | Array<IDialogFormLoja>>(null);
  get ListLojasId() {
    return this.#setListLojasId.asReadonly();
  }

  public httpListLojasId$(id: number): Observable<Array<IDialogFormLoja>> {
    return this.#http.get<Array<IDialogFormLoja>>(`${this.#url()}/${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setListLojasId.set(res))
    );
  }

  public httpCreateLojas$(
    id: number | null | undefined,
    nome: string | null | undefined,
    endereco: string | null | undefined,
    parceiros: string | null | undefined
  ): Observable<IDialogFormLoja> {
    return this.#http
      .post<IDialogFormLoja>(this.#url(), {
        id,
        nome,
        endereco,
        parceiros,
      })
      .pipe(shareReplay());
  }

  public httpUpdateLojas$(
    id: number | null | undefined,
    nome: string | null | undefined,
    endereco: string | null | undefined,
    parceiros: string | null | undefined
  ): Observable<IDialogFormLoja> {
    return this.#http
      .put<IDialogFormLoja>(`${this.#url()}/${id}`, {
        nome,
        endereco,
        parceiros,
      })
      .pipe(shareReplay());
  }

  public httpDeleteLojas$(id: number): Observable<void> {
    return this.#http
      .delete<void>(`${this.#url()}/${id}`, {})
      .pipe(shareReplay());
  }
}
