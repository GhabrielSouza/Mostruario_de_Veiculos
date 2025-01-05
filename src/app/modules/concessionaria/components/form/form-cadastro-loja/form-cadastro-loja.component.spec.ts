import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroLojaComponent } from './form-cadastro-loja.component';

describe('FormCadastroLojaComponent', () => {
  let component: FormCadastroLojaComponent;
  let fixture: ComponentFixture<FormCadastroLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCadastroLojaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCadastroLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
