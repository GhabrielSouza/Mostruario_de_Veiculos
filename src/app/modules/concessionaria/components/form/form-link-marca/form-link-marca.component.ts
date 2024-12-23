import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-form-link-marca',
    imports: [],
    templateUrl: './form-link-marca.component.html',
    styleUrl: './form-link-marca.component.scss'
})
export class FormLinkMarcaComponent {
  public listMarcas = signal<Array<{ id: number; marca: string }>>([
    {
      id: 1,
      marca: 'Volvo',
    },
  ]);
}
