import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-calendario-administrador',
  templateUrl: './calendario-administrador.component.html',
  styleUrls: ['./calendario-administrador.component.css']
})
export class CalendarioAdministradorComponent implements OnInit {

  listaLecciones:any = []

  listaReservas:any = []

  reservasLeccion:any = []

  cant:any; 

  constructor(
    private _adminService: AdministradorService
  ) { }

  ngOnInit(): void {
    this.getLecciones();
  }

 
  getLecciones(){ // Por mientras saca los instructores
    this._adminService.getLecciones().subscribe(
      data => {
        this.listaLecciones = data
        console.log(data)
      }
    );
  }

  // getReservasLeccion(listaLecciones: string | any[]){

  //   this._adminService.getReservas().subscribe(
  //     data => {
  //       this.listaReservas = data
        
  //       let cont = 0
  //       for(var i = 0;i<listaLecciones.length;i++){

  //         for(var j = 0;j<this.listaReservas.length;j++){
          
  //           if(listaLecciones[i]._id == this.listaReservas[j].idLeccion){
  //             cont++;
  //           }
          
  //         }
  //         this.reservasLeccion[i] =cont;
  //         cont = 0;

  //       }
  //     }
  //   );
  // }

  getReservas(){
    this._adminService.getReservas().subscribe(
          data => {
            this.listaReservas = data
          }
        );

  }
  reservar(){

    let datosReserva = {
      costo: '3000',
      idCliente: '60cff886df23c83594477725',
      idLeccion: '60d217e55ef1e93bcc1e065e'
    }
    this._adminService.reservar(datosReserva).subscribe(
      data => {
        this.listaReservas = data
        console.log(data);
      }
    );
  }

}
