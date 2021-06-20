import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionClientesAdministradorComponent } from './gestion-clientes-administrador.component';

describe('GestionClientesAdministradorComponent', () => {
  let component: GestionClientesAdministradorComponent;
  let fixture: ComponentFixture<GestionClientesAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionClientesAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionClientesAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
