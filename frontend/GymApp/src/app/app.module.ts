import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VerClientesComponent } from './Instructores/ver-clientes/ver-clientes.component';
import { AggLeccionComponent } from './Instructores/agg-leccion/agg-leccion.component';
import { HomeClienteComponent } from './Clientes/home-cliente/home-cliente.component';
import { ReservasComponent } from './Clientes/reservas/reservas.component';
import { CalendarioClienteComponent } from './Clientes/calendario-cliente/calendario-cliente.component';
import { PerfilClienteComponent } from './Clientes/perfil-cliente/perfil-cliente.component';
import { PagosClienteComponent } from './Clientes/pagos-cliente/pagos-cliente.component';
import { HomeAdministradorComponent } from './Administrador/home-administrador/home-administrador.component';
import { CalendarioAdministradorComponent } from './Administrador/calendario-administrador/calendario-administrador.component';
import { GestionClientesAdministradorComponent } from './Administrador/gestion-clientes-administrador/gestion-clientes-administrador.component';
import { GestionInstructoresAdministradorComponent } from './Administrador/gestion-instructores-administrador/gestion-instructores-administrador.component';
import { InfoClientesAdministradorComponent } from './Administrador/info-clientes-administrador/info-clientes-administrador.component';
import { ConfiguracionAdministradorComponent } from './Administrador/configuracion-administrador/configuracion-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VerClientesComponent,
    AggLeccionComponent,
    HomeClienteComponent,
    ReservasComponent,
    CalendarioClienteComponent,
    PerfilClienteComponent,
    PagosClienteComponent,
    HomeAdministradorComponent,
    CalendarioAdministradorComponent,
    GestionClientesAdministradorComponent,
    GestionInstructoresAdministradorComponent,
    InfoClientesAdministradorComponent,
    ConfiguracionAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
