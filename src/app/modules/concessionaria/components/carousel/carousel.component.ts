import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ICarouselImagem } from '../../interface/ICarouselImagem.interface';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() imagens: ICarouselImagem[] = [];
  @Input() indicadores = true;
  @Input() controles = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  selecionarIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlidesImages();
    }
  }

  public autoSlidesImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  public selecionarImagem(index: number): void {
    this.selecionarIndex = index;
  }

  public onPrevClick(): void {
    if (this.selecionarIndex === 0) {
      this.selecionarIndex = this.imagens.length - 1;
    } else {
      this.selecionarIndex--;
    }
  }

  public onNextClick(): void {
    if (this.selecionarIndex === this.imagens.length - 1) {
      this.selecionarIndex = 0;
    } else {
      this.selecionarIndex++;
    }
  }
}
