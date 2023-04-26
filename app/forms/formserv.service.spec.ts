import { TestBed } from '@angular/core/testing';

import { FormservService } from './formserv.service';

describe('FormservService', () => {
  let service: FormservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
