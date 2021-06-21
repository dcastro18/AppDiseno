import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';


@Component({
  selector: 'app-gestion-clientes-administrador',
  templateUrl: './gestion-clientes-administrador.component.html',
  styleUrls: ['./gestion-clientes-administrador.component.css']
})
export class GestionClientesAdministradorComponent implements OnInit {

  listaClientes:any = [];

  listaLecciones:any = [];

  leccionEscogida:any;

  clientesLeccionEscogida:any;


  infoCliente = {
    nombre:     '',
    correo:     '',
    estado:     '',
    numero:     '',
    usuario:    '',
    contraseña: '',
  };

  constructor(
    private _adminService: AdministradorService ,
    //private authService : AuthserviceService
  ) { }

  ngOnInit(): void {
    this.getClientes();
    this.getLecciones();
  }

  getClientes(){ // Por mientras saca los instructores
    this._adminService.getClientes().subscribe(
      data => {
        this.listaClientes = data
        console.log(data);
      }
    );
  }

  getLecciones(){ // Por mientras saca los instructores
    this._adminService.getLecciones().subscribe(
      data => {
        this.listaLecciones = data

        this.leccionEscogida= this.listaLecciones[0]; // cambiar
        this.clientesLeccionEscogida = this.leccionEscogida.clientes;
        console.log(this.leccionEscogida);

      }
    );
  }


  registrarCliente(){ 
    var x = document.getElementById("nombre")?.textContent;
    console.log(x);
    // this._adminService.post(this.infoCliente).subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
  }

}
