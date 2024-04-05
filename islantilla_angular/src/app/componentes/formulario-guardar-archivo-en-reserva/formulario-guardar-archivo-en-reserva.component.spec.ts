/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormularioGuardarArchivoEnReservaComponent } from './formulario-guardar-archivo-en-reserva.component';

describe('FormularioGuardarArchivoEnReservaComponent', () => {
  let component: FormularioGuardarArchivoEnReservaComponent;
  let fixture: ComponentFixture<FormularioGuardarArchivoEnReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioGuardarArchivoEnReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGuardarArchivoEnReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
