import { Injectable } from '@angular/core';
import { USUARIO } from '@core/constanst/index';
import { Usuario } from '@core/models/Usuario.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService  extends ApiService{
/**
 * getAllUsuario
 */
public getAllUsuario(): Observable<any> {
return this.get(USUARIO.BASEUSUARIO);
  
}
/**
 * createUsuario
*/
public createUsuario(usuario: Usuario): Observable<any> {
  return this.post(USUARIO.BASEUSUARIO, usuario);
  
}

/**
 * updateUsuario
 */
public updateUsuario(usuario:Usuario): Observable <any>  {
  const {id, ...data} = usuario;
  return this.update(`${USUARIO.BASEUSUARIO}/${id}`, data);

}

/**
 * deleteEstado
*/

public deleteEstado(id: number): Observable<any> {
  return this.delete(`${USUARIO.BASEUSUARIO}${id}`);
  
}

/**
 * getUsuarioByID
*/
public getUsuarioByID(id: number): Observable <any> {
  return this.get(`${USUARIO.BASEUSUARIO}${id}`)
  
}

}
