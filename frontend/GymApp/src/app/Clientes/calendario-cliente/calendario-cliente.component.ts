import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/Administrador/administrador.service';

@Component({
  selector: 'app-calendario-cliente',
  templateUrl: './calendario-cliente.component.html',
  styleUrls: ['./calendario-cliente.component.css']
})
export class CalendarioClienteComponent implements OnInit {

  listaLecciones:any = []

  listaReservas:any = []

  reservasLeccion:any = []

  cant:any; 

  constructor(
    private _adminService: AdministradorService
  ) { }

  ngOnInit(): void {
    this.getLecciones();
  }

  getLecciones(){ // Por mientras saca los instructores
    this._adminService.getLecciones().subscribe(
      data => {
        this.listaLecciones = data
        console.log(data)
      }
    );
  }

}
