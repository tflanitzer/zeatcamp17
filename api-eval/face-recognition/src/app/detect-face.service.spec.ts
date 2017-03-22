import { TestBed, inject } from '@angular/core/testing';

import { DetectFaceService } from './detect-face.service';

describe('DetectFaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetectFaceService]
    });
  });

  it('should ...', inject([DetectFaceService], (service: DetectFaceService) => {
    expect(service).toBeTruthy();
  }));
});
