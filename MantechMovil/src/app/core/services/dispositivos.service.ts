import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DISPOSITIVO } from '@core/constanst';
import { Dispositivo } from '@core/models/Dispositivo';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {

  constructor(private http:HttpClient) { }
  UrlDispo="https://mantech-back.herokuapp.com/api/Dispositivos/"

  createDispo(dispositivo:Dispositivo){
    return this.http.post<Dispositivo>(this.UrlDispo,dispositivo);
  }
  
}
