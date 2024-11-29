import { TestBed } from '@angular/core/testing';

import { LanguageFetchingService } from './language-fetching.service';

describe('LanguageFetchingService', () => {
  let service: LanguageFetchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageFetchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
