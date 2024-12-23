import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-form-filtragem-marcas',
    imports: [FormsModule],
    templateUrl: './form-filtragem-marcas.component.html',
    styleUrl: './form-filtragem-marcas.component.scss'
})
export class FormFiltragemMarcasComponent {
  public listMarcaCarro = signal<Array<{ marca: string }>>([
    {
      marca: 'Volvo',
    },
    {
      marca: 'BMW',
    },
    {
      marca: 'Mercedez',
    },
  ]);

  public submitForm(form: NgForm) {
    console.log(form);
  }
}
