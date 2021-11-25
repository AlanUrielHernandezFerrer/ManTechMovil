export interface Usuario {

    id:number;
    nombre_empleado:string;
    apellido_paterno:string;
    apellido_materno:string;
    telefono:string;
    correo:string;
    contrasena:string;
    clave_empresa:string;
    fk_empresa:string;
    fk_rol:string;
    fk_statususuario:string;

}