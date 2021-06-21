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
  
  constructor(private _http: HttpClient) { }
  
  getClientes(){
    return this._http.get<any>(this._apiUrl);
  }
  //Filtros: activos y morosos, por servicio y por leccion

  getServicios()
  {
    return this._http.get<any>(this._apiUrl3);
  }

  // post(infoCliente){
  //   const headers = {"Content-Type":"application/json"};
  //   return this._http.post<any>(this._apiUrl , infoCliente, {headers});
  // }

  // getClientes(){ 
  //   const headers = {"Content-Type":"application/json"};
  //   return this._http.get<any>(this._apiUrl);
  // }
 

  //Calendario

  getLecciones(){
    return this._http.get<any>(this._apiUrl2);
  }

}
