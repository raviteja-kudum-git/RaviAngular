import { TestBed } from '@angular/core/testing';

import { MystringService } from './mystring.service';

describe('MystringService', () => {
  let service: MystringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MystringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
