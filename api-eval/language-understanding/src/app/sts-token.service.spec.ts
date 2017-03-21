/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StsTokenService } from './sts-token.service';

describe('StsTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StsTokenService]
    });
  });

  it('should ...', inject([StsTokenService], (service: StsTokenService) => {
    expect(service).toBeTruthy();
  }));
});
