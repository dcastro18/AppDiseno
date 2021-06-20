import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarInstructorAdministradorComponent } from './modificar-instructor-administrador.component';

describe('ModificarInstructorAdministradorComponent', () => {
  let component: ModificarInstructorAdministradorComponent;
  let fixture: ComponentFixture<ModificarInstructorAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarInstructorAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarInstructorAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
