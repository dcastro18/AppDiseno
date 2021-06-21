import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service'; 

@Component({
  selector: 'app-pagos-cliente',
  templateUrl: './pagos-cliente.component.html',
  styleUrls: ['./pagos-cliente.component.css']
})
export class PagosClienteComponent implements OnInit {

  listaPagosRealizados:any = [];

  listaPagosPendientes:any = [];

  listaPagosTotales:any = [];

  constructor(
    private _clientService: ClientesService
  ) { }

  ngOnInit(): void {
    this.getPagosRealizados();
  }

  getPagosRealizados(){ 
    this._clientService.getPagosRealizados().subscribe(
      data => {

        this.listaPagosTotales = data
        console.log(data);
      }
    );
  }

}
