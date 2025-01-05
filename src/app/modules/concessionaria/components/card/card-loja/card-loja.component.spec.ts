import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLojaComponent } from './card-loja.component';

describe('CardLojaComponent', () => {
  let component: CardLojaComponent;
  let fixture: ComponentFixture<CardLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLojaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
