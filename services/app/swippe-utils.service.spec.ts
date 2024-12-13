import { TestBed } from '@angular/core/testing';

import { SwippeUtilsService } from './swippe-utils.service';

describe('SwippeUtilsService', () => {
  let service: SwippeUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwippeUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
