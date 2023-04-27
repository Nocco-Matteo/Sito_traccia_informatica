import { TestBed } from '@angular/core/testing';

import { FiltriService } from './filtri.service';

describe('FiltriService', () => {
  let service: FiltriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
