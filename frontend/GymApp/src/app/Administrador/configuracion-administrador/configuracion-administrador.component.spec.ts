import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionAdministradorComponent } from './configuracion-administrador.component';

describe('ConfiguracionAdministradorComponent', () => {
  let component: ConfiguracionAdministradorComponent;
  let fixture: ComponentFixture<ConfiguracionAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
