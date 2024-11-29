import { TestBed } from '@angular/core/testing';

import { ObjectFetchingService } from './object-fetching.service';

describe('ObjectFetchingService', () => {
  let service: ObjectFetchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectFetchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
