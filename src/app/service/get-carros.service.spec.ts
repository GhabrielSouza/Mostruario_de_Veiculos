import { TestBed } from '@angular/core/testing';

import { GetCarrosService } from './get-carros.service';

describe('GetCarrosService', () => {
  let service: GetCarrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCarrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
