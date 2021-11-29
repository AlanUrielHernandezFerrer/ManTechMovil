import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '@core/models/AuthResponse';
import { UserEmpresa } from '@core/models/UserEmpresa';
import { environment } from '@env/environment';
const url = environment.direccionLoginEmpresa;

@Injectable({
  providedIn: 'root'
})
export class AuthEmpresasService {

  constructor(private http: HttpClient,) { }
 

  UrlLoginEmpresa="https://mantech-back.herokuapp.com/api/Empresas/Clave/"
    

  getUserUsarioEmpresa(claveunica:string){
    return this.http.get<UserEmpresa>(this.UrlLoginEmpresa+"/"+claveunica);
  
    }

}
