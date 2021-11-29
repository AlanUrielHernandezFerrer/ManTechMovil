import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '@core/models/AuthResponse';
import { User } from '@core/models/User';
import { Usuario } from '@core/models/Usuario.model';
import { environment } from '@env/environment';

//const url = environment.direccionLogin;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    ) { }
    UrlLogin="https://mantech-back.herokuapp.com/api/UsuariosSF/Auth/"
    UrlLoginNombre="https://mantech-back.herokuapp.com/api/UsuariosSF"
    

    getUserUsario(correo:string,contrasena:string){
      return this.http.get<User>(this.UrlLogin+"/"+correo+"/"+contrasena+"/");
    
      }
      
    

    
}
