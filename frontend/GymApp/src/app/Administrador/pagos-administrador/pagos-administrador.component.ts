import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-pagos-administrador',
  templateUrl: './pagos-administrador.component.html',
  styleUrls: ['./pagos-administrador.component.css']
})
export class PagosAdministradorComponent implements OnInit {

  listaPagosRealizados:any = [];

  listaPagosPendientes:any = [];

  listaPagosTotales:any = [];

   constructor(
    private _adminService: AdministradorService
  ) { }

  ngOnInit(): void {
    this.getPagosRealizados();
  }

  getPagosRealizados(){ 
    this._adminService.getPagosRealizados().subscribe(
      data => {

        this.listaPagosTotales = data
        console.log(data);
      }
    );
  }

  

}
