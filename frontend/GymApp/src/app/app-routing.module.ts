import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioAdministradorComponent } from './Administrador/calendario-administrador/calendario-administrador.component';
import { ConfiguracionAdministradorComponent } from './Administrador/configuracion-administrador/configuracion-administrador.component';
import { GestionClientesAdministradorComponent } from './Administrador/gestion-clientes-administrador/gestion-clientes-administrador.component';
import { GestionInstructoresAdministradorComponent } from './Administrador/gestion-instructores-administrador/gestion-instructores-administrador.component';
import { HomeAdministradorComponent } from './Administrador/home-administrador/home-administrador.component';
import { PagosAdministradorComponent } from './Administrador/pagos-administrador/pagos-administrador.component';
import { InfoClientesAdministradorComponent } from './Administrador/info-clientes-administrador/info-clientes-administrador.component';
import { ModificarInstructorAdministradorComponent } from './Administrador/modificar-instructor-administrador/modificar-instructor-administrador.component';
import { ModificarLeccionAdministradorComponent } from './Administrador/modificar-leccion-administrador/modificar-leccion-administrador.component';
import { CalendarioClienteComponent } from './Clientes/calendario-cliente/calendario-cliente.component';
import { HomeClienteComponent } from './Clientes/home-cliente/home-cliente.component';
import { PagosClienteComponent } from './Clientes/pagos-cliente/pagos-cliente.component';
import { PerfilClienteComponent } from './Clientes/perfil-cliente/perfil-cliente.component';
import { ReservasComponent } from './Clientes/reservas/reservas.component';
import { HomeInstructorComponent } from './Instructores/home-instructor/home-instructor.component';
import { LeccionesInstructorComponent } from './Instructores/lecciones-instructor/lecciones-instructor.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'instructor', component: HomeInstructorComponent},
  { path: 'instructor/lecciones', component: LeccionesInstructorComponent},

  { path: 'admin', component: HomeAdministradorComponent},

  { path: 'admin/calendario', component: CalendarioAdministradorComponent},
  { path: 'admin/config', component: ConfiguracionAdministradorComponent},
  { path: 'admin/gestionClientes', component: GestionClientesAdministradorComponent},
  { path: 'admin/gestionInstructores', component: GestionInstructoresAdministradorComponent},
  { path: 'admin/infoCliente/:_id', component: InfoClientesAdministradorComponent},
  { path: 'admin/modificarInstructor/:_id', component: ModificarInstructorAdministradorComponent},
  { path: 'admin/modificarLeccion/:_id', component: ModificarLeccionAdministradorComponent},
  { path: 'admin/pagos/:_id', component: PagosAdministradorComponent},
 
  { path: 'cliente', component: HomeClienteComponent},

  { path: 'cliente/calendario', component: CalendarioClienteComponent},
  { path: 'cliente/pagos', component: PagosClienteComponent},
  { path: 'cliente/perfil', component: PerfilClienteComponent},
  { path: 'cliente/reservas', component: ReservasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
