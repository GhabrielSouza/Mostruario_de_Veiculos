import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardCarroIndividualComponent } from '../../components/card/card-carro-individual/card-carro-individual.component';
import { ICarouselImagem } from '../../interface/ICarouselImagem.interface';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { GetCarrosService } from '../../../../service/get-carros.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    CardCarroIndividualComponent,
    CarouselComponent,
  ],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.scss',
})
export class DetalhesComponent implements OnInit {
  #router = inject(ActivatedRoute);
  #apiService = inject(GetCarrosService);

  public getId = this.#router.snapshot.params['id'];

  public getListCarrosId = this.#apiService.ListCarrosId;

  public ngOnInit(): void {
    this.#apiService.httpListCarrosId$(this.getId).subscribe();
  }

  public imagens = signal<Array<ICarouselImagem>>([
    {
      imagemSrc: 'assets/imgs/carros/carro1.webp',
    },
    {
      imagemSrc: 'assets/imgs/carros/carro2.jpeg',
    },
    {
      imagemSrc: 'assets/imgs/carros/carro3.webp',
    },
  ]);
}
