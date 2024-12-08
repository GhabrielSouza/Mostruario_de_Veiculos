import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCarroComponent } from './cards-carro.component';

describe('CardsCarroComponent', () => {
  let component: CardsCarroComponent;
  let fixture: ComponentFixture<CardsCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsCarroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
