import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-configuracion-administrador',
  templateUrl: './configuracion-administrador.component.html',
  styleUrls: ['./configuracion-administrador.component.css']
})
export class ConfiguracionAdministradorComponent implements OnInit {

  listaServicios:any = []

  configSala = {
    capacidad:     '',
    aforo:     '',
    listaLecciones: ''
  }

  constructor(
    private _adminService: AdministradorService
  ) { }

  ngOnInit(): void {
    this.getServicios();
  }

  getServicios(){ // Por mientras saca los instructores
    this._adminService.getServicios().subscribe(
      data => {
        this.listaServicios = data
        console.log(data);
      }
    );
  }

  modificarSala(capacidad: string, aforo: string){

    let id = '60d21e7000a51340540005b3'
    this.configSala.capacidad = capacidad;
    this.configSala.aforo = aforo;
    
    this._adminService.modificarSala(id,this.configSala).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  anadirServicio(nombre: string){ 
    let infoServicio = {
      nombre: nombre
    }
    
    this._adminService.postServicio(infoServicio).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  eliminarServicio(nombre: string){ //falta
    let infoServicio = {
      nombre: nombre
    }
    
    this._adminService.postServicio(infoServicio).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
