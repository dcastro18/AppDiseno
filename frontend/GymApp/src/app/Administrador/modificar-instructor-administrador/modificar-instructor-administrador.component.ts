import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-modificar-instructor-administrador',
  templateUrl: './modificar-instructor-administrador.component.html',
  styleUrls: ['./modificar-instructor-administrador.component.css']
})
export class ModificarInstructorAdministradorComponent implements OnInit {

  listaServicios:any = []

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
