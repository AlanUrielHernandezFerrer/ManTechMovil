import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaveEmpresaPageRoutingModule } from './clave-empresa-routing.module';

import { ClaveEmpresaPage } from './clave-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaveEmpresaPageRoutingModule
  ],
  declarations: [ClaveEmpresaPage]
})
export class ClaveEmpresaPageModule {}
