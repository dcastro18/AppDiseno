import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  _apiUrl = environment.url + "/api/administradores";

  _apiUrl2 =  environment.url + "/api/lecciones";

  _apiUrl3 =  environment.url + "/api/servicios";

  _apiUrl4 =  environment.url + "/api/pagos";

  _apiUrl5 =  environment.url + "/api/reservaciones";

  _apiUrl6 =  environment.url + "/api/instructores";

  _apiUrl7 =  environment.url + "/api/clientes";

  _apiUrl8 =  environment.url + "/api/salas";
  
  constructor(private _http: HttpClient) { }
  
  getClientes(){
    return this._http.get<any>(this._apiUrl);
  }
  //Filtros: activos y morosos, por servicio y por leccion

  getServicios()
  {
    return this._http.get<any>(this._apiUrl3);
  }

  //Calendario

  getLecciones(){
    return this._http.get<any>(this._apiUrl2);
  }

  getReservasLeccion(idLeccion: any){
    return this._http.get<any>(this._apiUrl+'/'+idLeccion);
  }

  getReservas(){
    return this._http.get<any>(this._apiUrl5);
  }

  //Pagos
  getPagosRealizados(){
    return this._http.get<any>(this._apiUrl4);
  }

  getInstructores(){
    return this._http.get<any>(this._apiUrl6);
  }

  post(infoCliente: { nombre: string; correo: string; numero: string; usuario: string; contraseña: string; }){
    const headers = {"Content-Type":"application/json"};
    return this._http.post<any>(this._apiUrl7 , infoCliente, {headers});
  }

  postLeccion(infoLeccion: { clase: string; instructor: string; dia: string; hora: string; duracion: string; }){
    const headers = {"Content-Type":"application/json"};
    return this._http.post<any>(this._apiUrl2 , infoLeccion, {headers});

  }

  getSala(){
    return this._http.get<any>(this._apiUrl8);
  }

  postSala(infoSala: { capacidad: string; aforo: string; listaLecciones: string; }){
    const headers = {"Content-Type":"application/json"};
    return this._http.post<any>(this._apiUrl8 , infoSala, {headers});
  }

  modificarSala(id: string, infoSala: { capacidad: string; aforo: string}){
    return this._http.put(this._apiUrl8+'/'+id, infoSala);
  }

  postServicio(infoServicio: { nombre: string; }){
    const headers = {"Content-Type":"application/json"};
    return this._http.post<any>(this._apiUrl3 , infoServicio, {headers});
  }
  
  reservar(datosReserva: { costo: string; idCliente: string; idLeccion: string; }){
    const headers = {"Content-Type":"application/json"};
    return this._http.post<any>(this._apiUrl5 , datosReserva, {headers});

  }

  postInstructor(infoInstructor: { nombre: string; correo: string; especialidades: string; numero: string; usuario: string; contraseña: string; }){
    const headers = {"Content-Type":"application/json"};
    return this._http.post<any>(this._apiUrl6 , infoInstructor, {headers});
  }

}
