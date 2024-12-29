import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroMarcaComponent } from './form-cadastro-marca.component';

describe('FormCadastroMarcaComponent', () => {
  let component: FormCadastroMarcaComponent;
  let fixture: ComponentFixture<FormCadastroMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCadastroMarcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCadastroMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
