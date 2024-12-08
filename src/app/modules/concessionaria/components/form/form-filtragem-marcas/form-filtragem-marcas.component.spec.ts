import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFiltragemMarcasComponent } from './form-filtragem-marcas.component';

describe('FormFiltragemMarcasComponent', () => {
  let component: FormFiltragemMarcasComponent;
  let fixture: ComponentFixture<FormFiltragemMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFiltragemMarcasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFiltragemMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
