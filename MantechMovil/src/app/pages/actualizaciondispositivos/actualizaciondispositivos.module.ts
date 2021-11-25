import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizaciondispositivosPageRoutingModule } from './actualizaciondispositivos-routing.module';

import { ActualizaciondispositivosPage } from './actualizaciondispositivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizaciondispositivosPageRoutingModule
  ],
  declarations: [ActualizaciondispositivosPage]
})
export class ActualizaciondispositivosPageModule {}
