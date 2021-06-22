import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/Administrador/administrador.service';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit {

  listaServicios:any = []

  constructor(
    private _adminService: AdministradorService
  ) { }

  ngOnInit(): void {
    this.getServicios();
  }

  getServicios(){ 
    this._adminService.getServicios().subscribe(
      data => {
        this.listaServicios = data
      }
    );
  }

}
