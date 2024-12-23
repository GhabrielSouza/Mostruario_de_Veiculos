import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardCarroIndividualComponent } from '../../components/card/card-carro-individual/card-carro-individual.component';
import { ICarouselImagem } from '../../interface/ICarouselImagem.interface';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
    selector: 'app-detalhes',
    imports: [
        HeaderComponent,
        FooterComponent,
        CardCarroIndividualComponent,
        CarouselComponent,
    ],
    templateUrl: './detalhes.component.html',
    styleUrl: './detalhes.component.scss'
})
export class DetalhesComponent {
  public imagens = signal<Array<ICarouselImagem>>([
    {
      imagemSrc: 'assets/imgs/carros/carro1.webp',
      imagemAlt: 'Carro 1',
    },
    {
      imagemSrc: 'assets/imgs/carros/carro2.jpeg',
      imagemAlt: 'Carro 2',
    },
    {
      imagemSrc: 'assets/imgs/carros/carro3.webp',
      imagemAlt: 'Carro 3',
    },
  ]);
}
