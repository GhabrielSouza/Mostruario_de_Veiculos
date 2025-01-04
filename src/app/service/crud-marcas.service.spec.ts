import { TestBed } from '@angular/core/testing';

import { CrudMarcasService } from './crud-marcas.service';

describe('CrudMarcasService', () => {
  let service: CrudMarcasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudMarcasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
