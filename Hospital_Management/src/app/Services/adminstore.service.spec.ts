import { TestBed } from '@angular/core/testing';

import { AdminstoreService } from './adminstore.service';

describe('AdminstoreService', () => {
  let service: AdminstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
