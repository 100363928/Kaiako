import { TestBed } from '@angular/core/testing';

import { CrearRutinasService } from './crear-rutinas.service';

describe('CrearRutinasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrearRutinasService = TestBed.get(CrearRutinasService);
    expect(service).toBeTruthy();
  });
});
