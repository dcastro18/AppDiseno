import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.css']
})
export class HomeAdministradorComponent implements OnInit {

  listaServicios:any = []

  infoSala:any = []

  constructor(
    private _adminService: AdministradorService
  ) { }

  ngOnInit(): void {
    this.getServicios();
    this.getSala();
    //this.postSala();
  }

  getServicios(){ // Por mientras saca los instructores
    this._adminService.getServicios().subscribe(
      data => {
        this.listaServicios = data
        console.log(data);
      }
    );
  }

  getSala(){ 
    this._adminService.getSala().subscribe(
      data => {
        this.infoSala = data

        this.infoSala = this.infoSala[0];
        console.log(data);
      }
    );
  }

  postSala(){ 

    let infoSala = {
      capacidad: '150',
      aforo: '100',
      listaLecciones: '',
    };
    this._adminService.postSala(infoSala).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
