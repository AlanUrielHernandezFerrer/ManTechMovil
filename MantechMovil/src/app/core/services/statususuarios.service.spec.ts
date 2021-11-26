import { TestBed } from '@angular/core/testing';

import { StatususuariosService } from './statususuarios.service';

describe('StatususuariosService', () => {
  let service: StatususuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatususuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
