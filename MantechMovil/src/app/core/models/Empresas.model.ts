export interface empresaModel {
    id:number;
    nombre:string;
    correo:string;
    contraseña:string;
    claveunica:string;
    descripcion:string;
    direccion:string;
    fk_estado:string;
    fk_municipio:string;
    fk_statusempresa:string;  
}