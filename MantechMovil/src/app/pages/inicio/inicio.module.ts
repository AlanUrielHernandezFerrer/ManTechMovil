import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { RegistroDispositivosPage } from '../registro-dispositivos/registro-dispositivos.page';
import { ResgistroDispositivoComponent } from '../resgistro-dispositivo/resgistro-dispositivo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [InicioPage,ResgistroDispositivoComponent],
  entryComponents:[ResgistroDispositivoComponent],
})
export class InicioPageModule {}
