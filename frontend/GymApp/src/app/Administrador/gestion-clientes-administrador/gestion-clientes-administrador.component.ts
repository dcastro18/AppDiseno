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
    numero:     '',
    morosidad:    '',
    usuario:    '',
    contraseña: '',
  };

  constructor(
    private _adminService: AdministradorService
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


  registrarCliente(nombre: string, correo: string, telefono: string,usuario:string, contraseña: string){ 

    this.infoCliente.nombre = nombre;
    this.infoCliente.correo = correo;
    this.infoCliente.numero = telefono;
    this.infoCliente.contraseña = contraseña;
    this.infoCliente.usuario = usuario;
    this.infoCliente.morosidad = '0';
    
    this._adminService.post(this.infoCliente).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
