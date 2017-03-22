import { TestBed, inject } from '@angular/core/testing';

import { DefinePersonService } from './define-person.service';

describe('DefinePersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefinePersonService]
    });
  });

  it('should ...', inject([DefinePersonService], (service: DefinePersonService) => {
    expect(service).toBeTruthy();
  }));
});
