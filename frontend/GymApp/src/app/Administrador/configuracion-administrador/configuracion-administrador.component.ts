import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-configuracion-administrador',
  templateUrl: './configuracion-administrador.component.html',
  styleUrls: ['./configuracion-administrador.component.css']
})
export class ConfiguracionAdministradorComponent implements OnInit {

  listaServicios:any = []

  configSala:any;

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

}
