import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDispositivosPageRoutingModule } from './registro-dispositivos-routing.module';

import { RegistroDispositivosPage } from './registro-dispositivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDispositivosPageRoutingModule
  ],
  declarations: [RegistroDispositivosPage]
})
export class RegistroDispositivosPageModule {}
