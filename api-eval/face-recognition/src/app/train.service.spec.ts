import { TestBed, inject } from '@angular/core/testing';

import { TrainService } from './train.service';

describe('TrainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainService]
    });
  });

  it('should ...', inject([TrainService], (service: TrainService) => {
    expect(service).toBeTruthy();
  }));
});
