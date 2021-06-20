import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioAdministradorComponent } from './calendario-administrador.component';

describe('CalendarioAdministradorComponent', () => {
  let component: CalendarioAdministradorComponent;
  let fixture: ComponentFixture<CalendarioAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
