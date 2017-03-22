import { TestBed, inject } from '@angular/core/testing';

import { ListPersonsService } from './list-persons.service';

describe('ListPersonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListPersonsService]
    });
  });

  it('should ...', inject([ListPersonsService], (service: ListPersonsService) => {
    expect(service).toBeTruthy();
  }));
});
