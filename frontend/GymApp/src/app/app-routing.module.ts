import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'Administrador', loadChildren: () => import('./Administrador/administrador.module').then(m => m.AdministradorModule) },
  { path: 'Clientes', loadChildren: () => import('./Clientes/clientes.module').then(m => m.ClientesModule) },
  { path: 'Instructores', loadChildren: () => import('./Instructores/instructores.module').then(m => m.InstructoresModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

