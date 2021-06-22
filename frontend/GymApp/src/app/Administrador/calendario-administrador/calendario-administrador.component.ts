import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-calendario-administrador',
  templateUrl: './calendario-administrador.component.html',
  styleUrls: ['./calendario-administrador.component.css']
})
export class CalendarioAdministradorComponent implements OnInit {

  listaLecciones:any = []

  listaReservas:any = []

  constructor(
    private _adminService: AdministradorService
  ) { }

  ngOnInit(): void {
    this.getLecciones();
    this.getReservasLeccion();
  }

 
  getLecciones(){ // Por mientras saca los instructores
    this._adminService.getLecciones().subscribe(
      data => {
        this.listaLecciones = data
        console.log(data);
        console.log("que pasa")
      }
    );
  }

  getReservasLeccion(){

    // for (var i = 0; i < this.listaLecciones.length; i++) {

    //   let idLeccion = this.listaLecciones[i]._id

    //   this._adminService.getReservasLeccion(idLeccion).subscribe(
    //     data => {
    //       this.listaReservas = data
    //       console.log(data);
    //     }
    //   );
    // }

    this._adminService.getReservas().subscribe(
          data => {
            this.listaReservas = data
            console.log(data);
          }
        );
  }

}
