import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarLeccionAdministradorComponent } from './modificar-leccion-administrador.component';

describe('ModificarLeccionAdministradorComponent', () => {
  let component: ModificarLeccionAdministradorComponent;
  let fixture: ComponentFixture<ModificarLeccionAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarLeccionAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarLeccionAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
