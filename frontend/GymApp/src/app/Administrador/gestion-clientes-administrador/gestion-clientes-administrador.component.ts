import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';


@Component({
  selector: 'app-gestion-clientes-administrador',
  templateUrl: './gestion-clientes-administrador.component.html',
  styleUrls: ['./gestion-clientes-administrador.component.css']
})
export class GestionClientesAdministradorComponent implements OnInit {

  listaClientes:any = []

  constructor(
    private _adminService: AdministradorService ,
    //private authService : AuthserviceService
  ) { }

  ngOnInit(): void {
    this.getClientes()
  }


  getClientes(){ // Por mientras saca los instructores
    this._adminService.getAdmins().subscribe(
      data => {
        this.listaClientes = data
        console.log(data);
      }
    );
  }

}
