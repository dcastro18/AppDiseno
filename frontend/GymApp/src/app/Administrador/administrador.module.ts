import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdministradorRoutingModule } from './administrador-routing.module';

import { CalendarioAdministradorComponent } from './calendario-administrador/calendario-administrador.component';
import { ConfiguracionAdministradorComponent } from './configuracion-administrador/configuracion-administrador.component';
import { GestionClientesAdministradorComponent } from './gestion-clientes-administrador/gestion-clientes-administrador.component';
import { GestionInstructoresAdministradorComponent } from './gestion-instructores-administrador/gestion-instructores-administrador.component';
import { HomeAdministradorComponent } from './home-administrador/home-administrador.component';
import { InfoClientesAdministradorComponent } from './info-clientes-administrador/info-clientes-administrador.component';
import { ModificarInstructorAdministradorComponent } from './modificar-instructor-administrador/modificar-instructor-administrador.component';
import { ModificarLeccionAdministradorComponent } from './modificar-leccion-administrador/modificar-leccion-administrador.component';
import { PagosAdministradorComponent } from './pagos-administrador/pagos-administrador.component';

import { HttpClientModule } from '@angular/common/http';
import { AdministradorService } from './administrador.service';

@NgModule({
  declarations: [CalendarioAdministradorComponent, ConfiguracionAdministradorComponent, 
  GestionClientesAdministradorComponent,GestionClientesAdministradorComponent, 
  GestionInstructoresAdministradorComponent,HomeAdministradorComponent, InfoClientesAdministradorComponent,
  ModificarInstructorAdministradorComponent, ModificarLeccionAdministradorComponent, PagosAdministradorComponent],

  imports: [
    CommonModule,
    AdministradorRoutingModule,
    HttpClientModule,
    AdministradorModule
  ],
  providers: [AdministradorService]
})
export class AdministradorModule { }
