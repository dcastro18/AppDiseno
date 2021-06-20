import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInstructoresAdministradorComponent } from './gestion-instructores-administrador.component';

describe('GestionInstructoresAdministradorComponent', () => {
  let component: GestionInstructoresAdministradorComponent;
  let fixture: ComponentFixture<GestionInstructoresAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionInstructoresAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInstructoresAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
