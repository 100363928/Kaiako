import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEntrenadorPage } from './ver-entrenador.page';

describe('VerEntrenadorPage', () => {
  let component: VerEntrenadorPage;
  let fixture: ComponentFixture<VerEntrenadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEntrenadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEntrenadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
