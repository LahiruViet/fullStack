import { TestBed, inject } from '@angular/core/testing';

import { EBookDataService } from './e-book-data.service';

describe('EBookDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EBookDataService]
    });
  });

  it('should be created', inject([EBookDataService], (service: EBookDataService) => {
    expect(service).toBeTruthy();
  }));
});
