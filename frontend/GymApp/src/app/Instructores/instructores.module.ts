import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructoresRoutingModule } from './instructores-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { HomeInstructorComponent } from './home-instructor/home-instructor.component';
import { LeccionesInstructorComponent } from './lecciones-instructor/lecciones-instructor.component';
import { InstructoresService } from './instructores.service';


@NgModule({
  declarations: [HomeInstructorComponent,LeccionesInstructorComponent],
  imports: [
    CommonModule,
    InstructoresRoutingModule,
    HttpClientModule,
  ],
  providers: [InstructoresService]
})
export class InstructoresModule { }
