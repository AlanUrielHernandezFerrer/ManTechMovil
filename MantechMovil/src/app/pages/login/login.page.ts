import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DBkeys } from '@core/models/dbkeys';
import { User } from '@core/models/User';
import { AuthService } from '@core/services/auth.service';
import { SessionStorageService } from '@core/services/session-storage.service';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private UserLogin:User;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private menuCtrl: MenuController,
    private as: AuthService,
    private storage:SessionStorageService,) {}
    private login: User = {correo:'',contrasena:''};
    passwordShown = false;
    passwordType = 'password';
    isLogged = false;
    isLoginFail= false;

  ngOnInit() {
    this.menuCtrl.enable(false);
  }
  onlogin(form: NgForm){
    const postData: User =  
    {
      "correo":this.login.correo,
      "contrasena":this.login.contrasena
    }
    this.as.validarUsuario(postData).subscribe((res) => {
      if(res.correo){
        this.storage.set(DBkeys.ID, res.id);
        this.storage.set(DBkeys.NOMBRE_EMPLEADO, res.nombre_empleado);
        this.storage.set(DBkeys.APELLIDO_PATERNO, res.apellido_paterno);
        this.storage.set(DBkeys.APELLIDO_MATERNO, res.apellido_materno);
        this.storage.set(DBkeys.TELEFONO, res.telefono);
        this.storage.set(DBkeys.CORREO, res.correo);
        this.storage.set(DBkeys.CONTRASENA, res.contrasena);
        this.storage.set(DBkeys.CLAVE_EMPRESA, res.clave_empresa);
        this.storage.set(DBkeys.FK_EMPRESA, res.fk_empresa);
        this.storage.set(DBkeys.FK_ROL, res.fk_rol);
        this.storage.set(DBkeys.FK_STATUSUSUARIO, res.fk_statususuario);
        setTimeout( ()=> {
          this.router.navigateByUrl('/inicio')},1000);

      }
    }, err => {
      this.presentarError("Error de correo o contraseña");
    });
  
  }
  async presentarError(msg:string){
    const toast = await this.toastController.create({
      message: msg,
      duration:2000,
      position:'top',
      color:'danger',
      cssClass:'toast',
    });
    toast.present();
  }

}
