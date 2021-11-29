import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '@core/models/User';
import { Usuario } from '@core/models/Usuario.model';
import { AuthService } from '@core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo ="";
  contrasena="";

  constructor(
    private router: Router,
    private service: AuthService,) {}
  user :User = new User();
  ngOnInit(): void {
    let nombre_empleado= localStorage.getItem('nombre_empleado')!; 
    let apellido_paterno = localStorage.getItem('apellido_paterno')!; 
    let apellido_materno= localStorage.getItem('apellido_materno')!;
    let telefono= localStorage.getItem('telefono')!;
    let correo= localStorage.getItem('correo')!;
    let contrasena= localStorage.getItem('contrasena')!;
    let clave_empresa= localStorage.getItem('clave_empresa')!;
    let fk_empresa= localStorage.getItem('fk_empresa')!;
    let pagenav= localStorage.getItem('pagenav')!;

    if(correo !="x" || contrasena  !="x" ){

      //this.router.navigate([pagenav])
      
      }else{
        localStorage.setItem("nombre_empleado","x"); 
        localStorage.setItem("apellido_paterno","x"); 
        localStorage.setItem("apellido_materno","x");
        localStorage.setItem("telefono","x");
        localStorage.setItem("correo","x");
        localStorage.setItem("contrasena","x");
        localStorage.setItem("clave_empresa","x");
      
      }
  }
  
  Login(){

    this.service.getUserUsario(this.correo,this.contrasena)
    .subscribe(
       data=>{
    

      if(data == null){

    alert("no existe este usuario");
      }else{
        this.user=data;
        
        console.log(data)
        if(this.correo=== this.user.correo && this.contrasena=== this.user.contrasena){
          localStorage.setItem("nombre_empleado",this.user.nombre_empleado.toString()); 
          localStorage.setItem("apellido_paterno",this.user.apellido_paterno.toString()); 
          localStorage.setItem("apellido_materno",this.user.apellido_materno.toString());
          localStorage.setItem("telefono",this.user.telefono.toString());
          localStorage.setItem("correo",this.user.correo.toString());
          localStorage.setItem("contrasena",this.user.contrasena.toString());
          localStorage.setItem("clave_empresa",this.user.clave_empresa.toString());
    
   
        this.router.navigate(["inicio"])

    
      
          
        }else{

alert("usuario o contraseña incorecta")

         }

       }
   
   })
    
 }
 
 Home(){
  this.router.navigate([""])

}

}
