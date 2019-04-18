import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorTabsPage } from './entrenador-tabs.page';

describe('EntrenadorTabsPage', () => {
  let component: EntrenadorTabsPage;
  let fixture: ComponentFixture<EntrenadorTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrenadorTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
