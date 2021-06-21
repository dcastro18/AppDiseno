import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-calendario-administrador',
  templateUrl: './calendario-administrador.component.html',
  styleUrls: ['./calendario-administrador.component.css']
})
export class CalendarioAdministradorComponent implements OnInit {

  listaLecciones:any = []

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
        console.log(data);
      }
    );
  }

}
