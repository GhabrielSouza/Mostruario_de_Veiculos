import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLinkMarcaComponent } from './form-link-marca.component';

describe('FormLinkMarcaComponent', () => {
  let component: FormLinkMarcaComponent;
  let fixture: ComponentFixture<FormLinkMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLinkMarcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLinkMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
