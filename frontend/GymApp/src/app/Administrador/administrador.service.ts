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

  
  

}
