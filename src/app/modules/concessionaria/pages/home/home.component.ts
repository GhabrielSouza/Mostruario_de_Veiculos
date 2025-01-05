import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormFiltragemMarcasComponent } from '../../components/form/form-filtragem-marcas/form-filtragem-marcas.component';
import { CardsCarroComponent } from '../../components/card/cards-carro/cards-carro.component';
import { FormLinkMarcaComponent } from '../../components/form/form-link-marca/form-link-marca.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ICarouselImagem } from '../../interface/ICarouselImagem.interface';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    FormFiltragemMarcasComponent,
    FormLinkMarcaComponent,
    CardsCarroComponent,
    CarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public imagens = signal<Array<ICarouselImagem>>([
    {
      imagemSrc: 'assets/imgs/carrosCarousel/imagem1.avif',
    },
    {
      imagemSrc: 'assets/imgs/carrosCarousel/imagem2.avif',
    },
    {
      imagemSrc: 'assets/imgs/carrosCarousel/imagem3.avif',
    },
  ]);
}
