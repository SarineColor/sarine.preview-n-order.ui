/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PNOProcessService } from './pnoprocess.service';

describe('PNOProcessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PNOProcessService]
    });
  });

  it('should ...', inject([PNOProcessService], (service: PNOProcessService) => {
    expect(service).toBeTruthy();
  }));
});
