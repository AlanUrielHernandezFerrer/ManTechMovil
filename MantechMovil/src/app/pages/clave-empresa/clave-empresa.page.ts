import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DBkeys } from '@core/models/dbkeys';
import { UserEmpresa } from '@core/models/UserEmpresa';
import { AuthEmpresasService } from '@core/services/auth-empresas.service';
import { SessionStorageService } from '@core/services/session-storage.service';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clave-empresa',
  templateUrl: './clave-empresa.page.html',
  styleUrls: ['./clave-empresa.page.scss'],
})
export class ClaveEmpresaPage implements OnInit {
  claveunica ="";

  constructor(
    private router: Router,
 private service: AuthEmpresasService,) {}

  userEmpresa : UserEmpresa = new UserEmpresa();

  ngOnInit() {
 
    let nombre= localStorage.getItem('nombre')!;
    let correo= localStorage.getItem('correo')!;
    let contraseña= localStorage.getItem('contraseña')!;
    let claveunica= localStorage.getItem('claveunica')!;
    let descripcion= localStorage.getItem('descripcion')!;
    let direccion= localStorage.getItem('direccion')!;
    let pagenav= localStorage.getItem('pagenav')!;
    if(claveunica !="x" ){

      //this.router.navigate([pagenav])
      
      }else{
      
        localStorage.setItem("nombre","x");
        localStorage.setItem("correo","x");
        localStorage.setItem("contraseña","x");
        localStorage.setItem("claveunica","x");
        localStorage.setItem("descripcion","x")!;
        localStorage.setItem("direccion","x")!;
      
      }
  }
 
  Login(){

    this.service.getUserUsarioEmpresa(this.claveunica)
    .subscribe(
    data=>{

      if(data == null){

    alert("no existe esta empresa")    
      }else{
        this.userEmpresa=data;
        
        console.log(data)
        if(this.claveunica=== this.userEmpresa.claveunica ){

        localStorage.setItem("nombre",this.userEmpresa.nombre.toString());
        localStorage.setItem("correo",this.userEmpresa.correo.toString());
        localStorage.setItem("contraseña",this.userEmpresa.contraseña.toString());
        localStorage.setItem("claveunica",this.userEmpresa.claveunica.toString());
        localStorage.setItem("descripcion",this.userEmpresa.descripcion.toString());
        localStorage.setItem("direccion",this.userEmpresa.direccion.toString());
        this.router.navigate(["login"])

    

          
        }else{

alert("clave incorecta")

         }

       }
   
   })
    
 }
 
Home(){
  this.router.navigate([""])

}
}
