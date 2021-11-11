import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizacionDispositosPageRoutingModule } from './actualizacion-dispositos-routing.module';

import { ActualizacionDispositosPage } from './actualizacion-dispositos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizacionDispositosPageRoutingModule
  ],
  declarations: [ActualizacionDispositosPage]
})
export class ActualizacionDispositosPageModule {}
