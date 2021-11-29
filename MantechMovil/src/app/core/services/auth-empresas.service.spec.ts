import { TestBed } from '@angular/core/testing';

import { AuthEmpresasService } from './auth-empresas.service';

describe('AuthEmpresasService', () => {
  let service: AuthEmpresasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthEmpresasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
