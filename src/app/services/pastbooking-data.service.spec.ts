import { TestBed } from '@angular/core/testing';

import { PastbookingDataService } from './pastbooking-data.service';

describe('PastbookingDataService', () => {
  let service: PastbookingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastbookingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
