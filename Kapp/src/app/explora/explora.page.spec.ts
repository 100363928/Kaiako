import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploraPage } from './explora.page';

describe('ExploraPage', () => {
  let component: ExploraPage;
  let fixture: ComponentFixture<ExploraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
