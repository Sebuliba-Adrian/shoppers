import { TestBed, inject } from '@angular/core/testing';

import { AuthSingletonService } from './auth-singleton.service';

describe('AuthSingletonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthSingletonService]
    });
  });

  it('should be created', inject([AuthSingletonService], (service: AuthSingletonService) => {
    expect(service).toBeTruthy();
  }));
});
