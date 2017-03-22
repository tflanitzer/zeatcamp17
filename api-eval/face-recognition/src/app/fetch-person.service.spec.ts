import { TestBed, inject } from '@angular/core/testing';

import { FetchPersonService } from './fetch-person.service';

describe('FetchPersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchPersonService]
    });
  });

  it('should ...', inject([FetchPersonService], (service: FetchPersonService) => {
    expect(service).toBeTruthy();
  }));
});
