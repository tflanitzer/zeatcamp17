import { TestBed, inject } from '@angular/core/testing';

import { AddPersonFaceService } from './add-person-face.service';

describe('AddPersonFaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPersonFaceService]
    });
  });

  it('should ...', inject([AddPersonFaceService], (service: AddPersonFaceService) => {
    expect(service).toBeTruthy();
  }));
});
