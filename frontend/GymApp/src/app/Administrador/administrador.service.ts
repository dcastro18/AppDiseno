import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  _apiUrl = environment.url + "/api/administradores";
  
  constructor(private _http: HttpClient) { }
  
  getAdmins(){
    return this._http.get<any>(this._apiUrl);
  }

  getInstructores(){
    const headers = {"Content-Type":"application/json"};
    return this._http.get<any>(
      `${this._apiUrl}/instructores`, {headers}
    );
  }

    // post(form){
  //   const headers = {"Content-Type":"application/json"};
  //   return this._http.post<any>(this._apiUrl , form, {headers});
  // }

  getClientes(){
    const headers = {"Content-Type":"application/json"};
    return this._http.get<any>(this._apiUrl);
  }

  // post(form){
  //   const headers = {"Content-Type":"application/json"};
  //   return this._http.post<any>(this._apiUrl , form, {headers});
  // }

}
