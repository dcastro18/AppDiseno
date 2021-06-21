import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  _apiUrl = environment.url + "/api/administradores";

  _apiUrl2 =  environment.url + "/api/lecciones";

  _apiUrl3 =  environment.url + "/api/servicios";

  _apiUrl4 =  environment.url + "/api/pagos";

  constructor(private _http: HttpClient) { }

  getClientes(){
    return this._http.get<any>(this._apiUrl);
  }

  getPagosRealizados(){
    return this._http.get<any>(this._apiUrl4);
  }

  getServicios()
  {
    return this._http.get<any>(this._apiUrl3);
  }

}