import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGerenciarComponent } from './btn-gerenciar.component';

describe('BtnGerenciarComponent', () => {
  let component: BtnGerenciarComponent;
  let fixture: ComponentFixture<BtnGerenciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnGerenciarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnGerenciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
