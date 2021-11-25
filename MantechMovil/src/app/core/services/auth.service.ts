import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '@core/models/AuthResponse';
import { User } from '@core/models/User';
import { environment } from '@env/environment';

const url = environment.direccionLogin;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpClient,
    ) { }
    validarUsuario(postData:User){
      return this.httpService.post<AuthResponse>(url,postData);
    }

    
}
