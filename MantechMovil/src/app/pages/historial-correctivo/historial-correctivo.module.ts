import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialCorrectivoPageRoutingModule } from './historial-correctivo-routing.module';

import { HistorialCorrectivoPage } from './historial-correctivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialCorrectivoPageRoutingModule
  ],
  declarations: [HistorialCorrectivoPage]
})
export class HistorialCorrectivoPageModule {}
