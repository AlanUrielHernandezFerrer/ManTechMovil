import { Injectable } from "@angular/core";

@Injectable()
export class DBkeys{
    public static readonly ID= "id";
    public static readonly NOMBRE_EMPLEADO= "nombre_empleado";
    public static readonly APELLIDO_PATERNO= "apellido_paterno";
    public static readonly APELLIDO_MATERNO= "apellido_materno";
    public static readonly TELEFONO= "telefono";
    public static readonly CORREO= "correo";
    public static readonly CONTRASENA= "contrasena";
    public static readonly CLAVE_EMPRESA= "clave_empresa";
    public static readonly FK_EMPRESA= "fk_empresa";
    public static readonly FK_ROL= "fk_rol";
    public static readonly FK_STATUSUSUARIO= "fk_statususuario";

    //CONTROLAR SI EL USUARIO ESTA LOGEADO
    public static readonly HAS_LOGGED_IN= "estalogeado";
 
}