import { Component, inject, LOCALE_ID, OnInit } from '@angular/core';
import { FormContatosComponent } from '../../form/form-contatos/form-contatos.component';
import { GetCarrosService } from '../../../../../service/get-carros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
@Component({
  selector: 'app-card-carro-individual',
  imports: [FormContatosComponent, CommonModule],
  templateUrl: './card-carro-individual.component.html',
  styleUrl: './card-carro-individual.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class CardCarroIndividualComponent implements OnInit {
  #router = inject(ActivatedRoute);
  #apiService = inject(GetCarrosService);

  public getId = this.#router.snapshot.params['id'];

  public getListCarrosId = this.#apiService.ListCarrosId;

  ngOnInit(): void {
    this.#apiService.httpListCarrosId$(this.getId).subscribe();
  }
}
