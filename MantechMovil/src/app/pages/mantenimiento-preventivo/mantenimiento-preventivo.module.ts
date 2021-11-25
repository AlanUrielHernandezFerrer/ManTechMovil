import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenimientoPreventivoPageRoutingModule } from './mantenimiento-preventivo-routing.module';

import { MantenimientoPreventivoPage } from './mantenimiento-preventivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenimientoPreventivoPageRoutingModule
  ],
  declarations: [MantenimientoPreventivoPage]
})
export class MantenimientoPreventivoPageModule {}
