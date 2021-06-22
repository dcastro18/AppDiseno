import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/Administrador/administrador.service';
@Component({
  selector: 'app-lecciones-instructor',
  templateUrl: './lecciones-instructor.component.html',
  styleUrls: ['./lecciones-instructor.component.css']
})
export class LeccionesInstructorComponent implements OnInit {

  listaServicios:any = []

  listaLecciones:any = []

  infoLeccion = {
    clase: '',
    instructor: '60d00db4b48ec7573cd8f6f0',
    dia: '',
    hora: '',
    duracion : ''
  };

  constructor(
    private _adminService: AdministradorService
  ) { }

  ngOnInit(): void {
    this.getServicios();
    this.getLecciones();
  }

  getServicios(){ // Por mientras saca los instructores
    this._adminService.getServicios().subscribe(
      data => {
        this.listaServicios = data
        console.log(data);
      }
    );
  }
  // 60d00db4b48ec7573cd8f6f0

  registrarLeccion(clase: string, dia: string, hora: string, duracion: string){ 

    this.infoLeccion.clase = clase;
    this.infoLeccion.dia = dia;
    this.infoLeccion.hora = hora;
    this.infoLeccion.duracion = duracion;
    
    this._adminService.postLeccion(this.infoLeccion).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  getLecciones(){ // Por mientras saca los instructores
    this._adminService.getLecciones().subscribe(
      data => {
        this.listaLecciones = data

        //this.leccionEscogida= this.listaLecciones[0]; // cambiar
        // this.clientesLeccionEscogida = this.leccionEscogida.clientes;
        // console.log(this.leccionEscogida);

      }
    );
  }

}
