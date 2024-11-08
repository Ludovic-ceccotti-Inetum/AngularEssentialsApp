import { TestBed } from '@angular/core/testing';

import { FetchingServiceService } from './fetching-service.service';

describe('FetchingServiceService', () => {
  let service: FetchingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
