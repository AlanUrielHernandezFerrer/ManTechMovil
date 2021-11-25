import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificacionFechaPreventivoPageRoutingModule } from './modificacion-fecha-preventivo-routing.module';

import { ModificacionFechaPreventivoPage } from './modificacion-fecha-preventivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificacionFechaPreventivoPageRoutingModule
  ],
  declarations: [ModificacionFechaPreventivoPage]
})
export class ModificacionFechaPreventivoPageModule {}
