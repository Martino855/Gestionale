import { TestBed } from '@angular/core/testing';

import { PalylistService } from './palylist.service';

describe('PalylistService', () => {
  let service: PalylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
