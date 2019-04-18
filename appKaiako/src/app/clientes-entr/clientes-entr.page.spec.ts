import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesEntrPage } from './clientes-entr.page';

describe('ClientesEntrPage', () => {
  let component: ClientesEntrPage;
  let fixture: ComponentFixture<ClientesEntrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesEntrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesEntrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
