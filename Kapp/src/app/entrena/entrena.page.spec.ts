import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenaPage } from './entrena.page';

describe('EntrenaPage', () => {
  let component: EntrenaPage;
  let fixture: ComponentFixture<EntrenaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrenaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
