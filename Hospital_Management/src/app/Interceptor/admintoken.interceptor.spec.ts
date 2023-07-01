import { TestBed } from '@angular/core/testing';

import { AdmintokenInterceptor } from './admintoken.interceptor';

describe('AdmintokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AdmintokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AdmintokenInterceptor = TestBed.inject(AdmintokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
