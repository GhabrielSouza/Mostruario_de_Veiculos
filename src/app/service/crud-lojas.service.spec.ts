import { TestBed } from '@angular/core/testing';

import { CrudLojasService } from './crud-lojas.service';

describe('CrudLojasService', () => {
  let service: CrudLojasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudLojasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
