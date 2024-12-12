import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cards-carro',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './cards-carro.component.html',
  styleUrl: './cards-carro.component.scss',
})
export class CardsCarroComponent {
  public carrosNovos = signal<
    Array<{
      nome: string;
      quilometragem: number;
      ano: Date;
      valor: number;
      qtdLojas: number;
    }>
  >([
    {
      nome: 'HYUNDAI CRETA',
      quilometragem: 456.52,
      ano: new Date(),
      valor: 149990.0,
      qtdLojas: 2,
    },
    {
      nome: 'Fiat Uno',
      quilometragem: 456.52,
      ano: new Date(),
      valor: 89990.0,
      qtdLojas: 2,
    },
    {
      nome: 'Hyundai HB20',
      quilometragem: 456.52,
      ano: new Date(),
      valor: 95990.0,
      qtdLojas: 2,
    },
  ]);

  public carrosSemiNovos = signal<
    Array<{
      nome: string;
      quilometragem: number;
      ano: Date;
      valor: number;
      qtdLojas: number;
    }>
  >([
    {
      nome: 'HYUNDAI CRETA',
      quilometragem: 456.52,
      ano: new Date(),
      valor: 149990.0,
      qtdLojas: 2,
    },
    {
      nome: 'Fiat Uno',
      quilometragem: 456.52,
      ano: new Date(),
      valor: 89990.0,
      qtdLojas: 2,
    },
    {
      nome: 'Hyundai HB20',
      quilometragem: 456.52,
      ano: new Date(),
      valor: 95990.0,
      qtdLojas: 2,
    },
  ]);
}
