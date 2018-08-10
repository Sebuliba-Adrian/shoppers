import { TestBed, inject } from '@angular/core/testing';

import { NavigateAwayGuardService } from './navigate-away-guard.service';

describe('NavigateAwayGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigateAwayGuardService]
    });
  });

  it('should be created', inject([NavigateAwayGuardService], (service: NavigateAwayGuardService) => {
    expect(service).toBeTruthy();
  }));
});
