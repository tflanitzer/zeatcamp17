/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LuisClientService } from './luis-client.service';

describe('LuisClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LuisClientService]
    });
  });

  it('should ...', inject([LuisClientService], (service: LuisClientService) => {
    expect(service).toBeTruthy();
  }));
});
