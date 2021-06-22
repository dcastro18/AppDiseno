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

  infoInstructor = {
    nombre:     '',
    correo: '',
    especialidades: '[]',
    numero : '',
    usuario : '',
    contraseña: '',
  };

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

  registrarInstructor(nombre: string, correo: string, numero: string,usuario:string, contraseña: string){ 

    let infoInstructor = {
      nombre: nombre,
      correo: correo,
      especialidades: '[]',
      numero : numero,
      usuario : usuario,
      contraseña: contraseña,
      tipo: 'normal'
    };
    

    this._adminService.postInstructor(infoInstructor).subscribe(
      data => {
        console.log(data);
      }
    );
  }


}
