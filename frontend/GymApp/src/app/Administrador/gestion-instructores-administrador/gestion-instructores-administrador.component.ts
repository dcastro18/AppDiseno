import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-gestion-instructores-administrador',
  templateUrl: './gestion-instructores-administrador.component.html',
  styleUrls: ['./gestion-instructores-administrador.component.css']
})
export class GestionInstructoresAdministradorComponent implements OnInit {

  listaInstructores:any = [];
  listaServicios:any = []

  constructor(
    private _adminService: AdministradorService
  ) { }

  ngOnInit(): void {
    this.getInstructores();
    this.getServicios();
  }

  getInstructores(){ // Por mientras saca los instructores
    this._adminService.getInstructores().subscribe(
      data => {
        this.listaInstructores = data
        console.log(data);
      }
    );
  }

  getServicios(){ // Por mientras saca los instructores
    this._adminService.getServicios().subscribe(
      data => {
        this.listaServicios = data
        console.log(data);
      }
    );
  }

  onSubmit(userVal: string, passVal:string): void {
    // this.user = userVal;
    // this.password = passVal;
    // console.log(this.user+' '+this.password);
  }

}
