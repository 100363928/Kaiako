import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEntrPage } from './register-entr.page';

describe('RegisterEntrPage', () => {
  let component: RegisterEntrPage;
  let fixture: ComponentFixture<RegisterEntrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEntrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEntrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
