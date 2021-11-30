import { TestBed } from '@angular/core/testing';

import { StatusdispositivosService } from './statusdispositivos.service';

describe('StatusdispositivosService', () => {
  let service: StatusdispositivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusdispositivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
