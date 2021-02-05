import { TestBed } from '@angular/core/testing';

import { ServicioRemoto } from './loginservice.service';

describe('LoginserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioRemoto = TestBed.get(ServicioRemoto);
    expect(service).toBeTruthy();
  });
});
