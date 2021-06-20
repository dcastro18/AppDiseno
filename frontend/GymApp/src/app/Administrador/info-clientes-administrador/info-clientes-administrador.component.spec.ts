import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoClientesAdministradorComponent } from './info-clientes-administrador.component';

describe('InfoClientesAdministradorComponent', () => {
  let component: InfoClientesAdministradorComponent;
  let fixture: ComponentFixture<InfoClientesAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoClientesAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoClientesAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
