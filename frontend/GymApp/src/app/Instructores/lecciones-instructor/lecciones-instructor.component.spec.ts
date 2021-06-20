import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionesInstructorComponent } from './lecciones-instructor.component';

describe('LeccionesInstructorComponent', () => {
  let component: LeccionesInstructorComponent;
  let fixture: ComponentFixture<LeccionesInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeccionesInstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeccionesInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
