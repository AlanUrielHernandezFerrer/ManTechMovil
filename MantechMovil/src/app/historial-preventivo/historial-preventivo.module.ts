import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPreventivoPageRoutingModule } from './historial-preventivo-routing.module';

import { HistorialPreventivoPage } from './historial-preventivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPreventivoPageRoutingModule
  ],
  declarations: [HistorialPreventivoPage]
})
export class HistorialPreventivoPageModule {}
