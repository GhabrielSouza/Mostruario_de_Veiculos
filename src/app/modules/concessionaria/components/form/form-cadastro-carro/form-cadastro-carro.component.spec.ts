import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroCarroComponent } from './form-cadastro-carro.component';

describe('FormCadastroCarroComponent', () => {
  let component: FormCadastroCarroComponent;
  let fixture: ComponentFixture<FormCadastroCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCadastroCarroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCadastroCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
