import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StatusDispositivosModel } from '@core/models/statusDispositivos';
import { User } from '@core/models/User';
import { Usuario } from '@core/models/Usuario.model';
import { DispositivosService } from '@core/services/dispositivos.service';
import { StatusdispositivosService } from '@core/services/statusdispositivos.service';
import { UsuariosService } from '@core/services/usuarios.service';
import { defaultData } from '@core/utils/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resgistro-dispositivo',
  templateUrl: './resgistro-dispositivo.component.html',
  styleUrls: ['./resgistro-dispositivo.component.scss'],
})
export class ResgistroDispositivoComponent implements OnInit {
  @Input() id: number;
  form: FormGroup;
  constructor(private formBuiler: FormBuilder ,
    private modalCtrl: ModalController,
    private dispositivosService: DispositivosService, 
    private apiStatus: StatusdispositivosService, 
    private apiUsuarios: UsuariosService,) { }
    usuario!:User[];
    statusDispositivo!: StatusDispositivosModel[];
  ngOnInit() {
    this.form = this.formBuiler.group({
      detalles: defaultData(),
      fecha_mantenimiento_prev: defaultData(),
      fk_statsdispositivo: defaultData(),
      fk_usuariossf: defaultData(),
      marca: defaultData(),
      modelo: defaultData(),
      nombre: defaultData(),
      tiempo_vida:defaultData(),
      tipo_dispositivo:defaultData(),
     
        
      });
      this.apiStatus.getStatusDispositivos().subscribe((data) => {
        this.statusDispositivo = data;
      });
      this.apiUsuarios.getAllUsuario().subscribe((data) => {
        this.usuario = data;
      });
  }
  closeModal(): void {
    this.modalCtrl.dismiss();
  }
  save(): void{

    this.form.value.fk_statsdispositivo = this.statusDispositivo.find( statusDisadd => statusDisadd.id = 92 );
    this.form.value.fk_usuariossf = this.usuario.find( usuarioadd => usuarioadd.id = 71 );
   
    this.dispositivosService.createDispo(this.form.value).subscribe(
      () => {
      console.log("Se agrego Dispositivo correctamente");
    }, 
    error => console.error(error),
    );
  }

}
