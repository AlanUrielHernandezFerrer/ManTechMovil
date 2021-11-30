import { Component, OnInit } from '@angular/core';
import { Usuario } from '@core/models/Usuario.model';
import { UsuariosService } from '@core/services/usuarios.service';
import { ModalController } from '@ionic/angular';
import { RegistroDispositivosPage } from '../registro-dispositivos/registro-dispositivos.page';
import { ResgistroDispositivoComponent } from '../resgistro-dispositivo/resgistro-dispositivo.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuarios: Usuario []=[];
  constructor(private usuarioService: UsuariosService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.usuarioService.getAllUsuario().subscribe(data => {
        this.usuarios=data;
        
        });
    
    }
   async createEstado(id?: number){
      const modal = await this.modalCtrl.create({
        component: ResgistroDispositivoComponent,
        componentProps: {id},
        
      });
      return await modal.present();
    }


  }

