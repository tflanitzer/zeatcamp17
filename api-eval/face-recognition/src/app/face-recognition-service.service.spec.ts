import { TestBed, inject } from '@angular/core/testing';

import { FaceRecognitionServiceService } from './face-recognition-service.service';

describe('FaceRecognitionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceRecognitionServiceService]
    });
  });

  it('should ...', inject([FaceRecognitionServiceService], (service: FaceRecognitionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
