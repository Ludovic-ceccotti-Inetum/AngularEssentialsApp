import { TestBed } from '@angular/core/testing';

import { ChampionFetchingService } from './champion-fetching.service';

describe('ChampionFetchingService', () => {
  let service: ChampionFetchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionFetchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
