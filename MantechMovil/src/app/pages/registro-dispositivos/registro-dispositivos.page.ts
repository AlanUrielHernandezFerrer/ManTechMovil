import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Dispositivo } from '@core/models/Dispositivo';
import { empresaModel } from '@core/models/Empresas.model';
import { StatusDispositivosModel } from '@core/models/statusDispositivos';
import { User } from '@core/models/User';
import { Usuario } from '@core/models/Usuario.model';
import { DispositivosService } from '@core/services/dispositivos.service';
import { StatusdispositivosService } from '@core/services/statusdispositivos.service';
import { UsuariosService } from '@core/services/usuarios.service';
import { defaultData } from '@core/utils/forms';
import { ModalController } from '@ionic/angular';
import { DispositivoPageModule } from '../dispositivo/dispositivo.module';

@Component({
  selector: 'app-registro-dispositivos',
  templateUrl: './registro-dispositivos.page.html',
  styleUrls: ['./registro-dispositivos.page.scss'],
})
export class RegistroDispositivosPage implements OnInit {
dispo :Dispositivo = new Dispositivo();
id: number;


  constructor(
    private router:Router ,
    //private modalCtrl: ModalController,
    private dispositivosService: DispositivosService, 
    private apiStatus: StatusdispositivosService, 
    private apiUsuarios: UsuariosService,) { }

    usuario!:Usuario[];
    
    statusDispositivo!: StatusDispositivosModel[];


  ngOnInit() {
    
      let detalles = localStorage.getItem('detalles')!;
      let fecha_mantenimiento_prev = localStorage.getItem('fecha_mantenimiento_prev')!;
      let fk_statsdispositivo = localStorage.getItem('fk_statsdispositivo')!;
      let fk_usuariossf = localStorage.getItem('fk_usuariossf')!;
      let marca = localStorage.getItem('marca')!;
      let modelo= localStorage.getItem('modelo')!; 
      let nombre = localStorage.getItem('nombre')!;
      let tiempo_vida = localStorage.getItem('tiempo_vida')!;
      let tipo_dispositivo = localStorage.getItem('tipo_dispositivo')!;
     
        
     
      this.apiStatus.getStatusDispositivos().subscribe((data) => {
        this.statusDispositivo = data;
      });
      this.apiUsuarios.getAllUsuario().subscribe((data) => {
        this.usuario = data;
      });
  }
  //closeModal(): void {
   // this.modalCtrl.dismiss();
  //}
  save(): void{

    this.dispo.fk_statsdispositivo = this.statusDispositivo.find( statusDisadd => statusDisadd.id = 92 );
    this.dispo.fk_usuariossf = this.usuario.find( usuarioadd => usuarioadd.id = 19 );
   
    this.dispositivosService.createDispo(this.dispo).subscribe(
      () => {
      console.log("Se agrego Dispositivo correctamente");
    }, 
    error => console.error(error),
    );
  }

}
