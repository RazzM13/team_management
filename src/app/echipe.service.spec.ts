import { TestBed } from '@angular/core/testing';

import { EchipeService } from './echipe.service';

describe('EchipeService', () => {
  let service: EchipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EchipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
