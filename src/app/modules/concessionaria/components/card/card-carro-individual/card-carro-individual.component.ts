import { Component, inject, OnInit } from '@angular/core';
import { FormContatosComponent } from '../../form/form-contatos/form-contatos.component';
import { GetCarrosService } from '../../../../../service/get-carros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-carro-individual',
  imports: [FormContatosComponent],
  templateUrl: './card-carro-individual.component.html',
  styleUrl: './card-carro-individual.component.scss',
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
