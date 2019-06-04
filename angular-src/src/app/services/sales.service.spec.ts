/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SalesService } from './sales.service';

describe('SalesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesService]
    });
  });

  it('should ...', inject([SalesService], (service: SalesService) => {
    expect(service).toBeTruthy();
  }));
});