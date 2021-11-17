import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialDispositivosPageRoutingModule } from './historial-dispositivos-routing.module';

import { HistorialDispositivosPage } from './historial-dispositivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialDispositivosPageRoutingModule
  ],
  declarations: [HistorialDispositivosPage]
})
export class HistorialDispositivosPageModule {}
