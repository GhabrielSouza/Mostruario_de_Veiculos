import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarroIndividualComponent } from './card-carro-individual.component';

describe('CardCarroIndividualComponent', () => {
  let component: CardCarroIndividualComponent;
  let fixture: ComponentFixture<CardCarroIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCarroIndividualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCarroIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
