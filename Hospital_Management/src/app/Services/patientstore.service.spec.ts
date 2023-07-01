import { TestBed } from '@angular/core/testing';

import { PatientstoreService } from './patientstore.service';

describe('PatientstoreService', () => {
  let service: PatientstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
