import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarSolicitudPage } from './aceptar-solicitud.page';

describe('AceptarSolicitudPage', () => {
  let component: AceptarSolicitudPage;
  let fixture: ComponentFixture<AceptarSolicitudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceptarSolicitudPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarSolicitudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
