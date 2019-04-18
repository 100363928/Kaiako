import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRutinaPage } from './crear-rutina.page';

describe('CrearRutinaPage', () => {
  let component: CrearRutinaPage;
  let fixture: ComponentFixture<CrearRutinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRutinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
