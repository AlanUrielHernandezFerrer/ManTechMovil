import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenimientoCorrectivoPageRoutingModule } from './mantenimiento-correctivo-routing.module';

import { MantenimientoCorrectivoPage } from './mantenimiento-correctivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenimientoCorrectivoPageRoutingModule
  ],
  declarations: [MantenimientoCorrectivoPage]
})
export class MantenimientoCorrectivoPageModule {}
