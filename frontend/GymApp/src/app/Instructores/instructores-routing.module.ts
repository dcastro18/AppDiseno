import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInstructorComponent } from './home-instructor/home-instructor.component';
import { LeccionesInstructorComponent } from './lecciones-instructor/lecciones-instructor.component';

const routes: Routes = [
  { path: 'lecciones', component: LeccionesInstructorComponent},
  { path: '', component: HomeInstructorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructoresRoutingModule { }
