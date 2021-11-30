import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatusdispositivosService {

  api="https://mantech-back.herokuapp.com/api/CatStatusDispositivos/";
  constructor(private http : HttpClient) { }


  getStatusDispositivos(){
    return this.http.get<any>(this.api)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
