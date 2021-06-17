import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggLeccionComponent } from './agg-leccion.component';

describe('AggLeccionComponent', () => {
  let component: AggLeccionComponent;
  let fixture: ComponentFixture<AggLeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggLeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggLeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
