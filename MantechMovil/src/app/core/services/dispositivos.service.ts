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
  Url2="https://mantech-back.herokuapp.com/api/Dispositivos/id/"

  createDispo(dispositivo:Dispositivo){
    return this.http.post<Dispositivo>(this.UrlDispo,dispositivo);
  }
  getDispo(name:string){
    return this.http.get<Dispositivo>(this.UrlDispo+"/"+name);
    
    }
  UpdateDispo(dispositivo:Dispositivo){

    return this.http.put<Dispositivo>(this.Url2+"/"+dispositivo.id,dispositivo);
    
    }

  getDispoId(id:number){
    return this.http.get<Dispositivo>(this.Url2+"/"+id);
        
  }
  
}
