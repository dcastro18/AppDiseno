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
    PagosClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
