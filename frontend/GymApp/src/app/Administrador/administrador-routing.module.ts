import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarioAdministradorComponent } from './calendario-administrador/calendario-administrador.component';
import { ConfiguracionAdministradorComponent } from './configuracion-administrador/configuracion-administrador.component';
import { GestionClientesAdministradorComponent } from './gestion-clientes-administrador/gestion-clientes-administrador.component';
import { GestionInstructoresAdministradorComponent } from './gestion-instructores-administrador/gestion-instructores-administrador.component';
import { HomeAdministradorComponent } from './home-administrador/home-administrador.component';
import { InfoClientesAdministradorComponent } from './info-clientes-administrador/info-clientes-administrador.component';
import { ModificarInstructorAdministradorComponent } from './modificar-instructor-administrador/modificar-instructor-administrador.component';
import { ModificarLeccionAdministradorComponent } from './modificar-leccion-administrador/modificar-leccion-administrador.component';


const routes: Routes = [
  { path: '', component: HomeAdministradorComponent},
  { path: 'calendario', component: CalendarioAdministradorComponent},
  { path: 'config', component: ConfiguracionAdministradorComponent},
  { path: 'gestionClientes', component: GestionClientesAdministradorComponent},
  { path: 'gestionInstructores', component: GestionInstructoresAdministradorComponent},
  { path: 'infoCliente/:_id', component: InfoClientesAdministradorComponent},
  { path: 'modificarInstructor/:_id/', component: ModificarInstructorAdministradorComponent},
  { path: 'modificarLeccion/:_id/', component: ModificarLeccionAdministradorComponent},
  { path: 'pagos/:_id/', component: ModificarLeccionAdministradorComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
