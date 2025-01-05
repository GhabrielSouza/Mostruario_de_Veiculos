import { Component, inject, OnInit, signal } from '@angular/core';
import { CrudMarcasService } from '../../../../../service/crud-marcas.service';

@Component({
  selector: 'app-form-link-marca',
  imports: [],
  templateUrl: './form-link-marca.component.html',
  styleUrl: './form-link-marca.component.scss',
})
export class FormLinkMarcaComponent implements OnInit {
  #apiService = inject(CrudMarcasService);

  public getListMarcas = this.#apiService.ListMarcas;

  ngOnInit(): void {
    this.#apiService.httpListMarcas$().subscribe();
  }
}
