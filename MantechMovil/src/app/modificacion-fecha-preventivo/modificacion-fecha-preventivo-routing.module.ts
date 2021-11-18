import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificacionFechaPreventivoPage } from './modificacion-fecha-preventivo.page';

const routes: Routes = [
  {
    path: '',
    component: ModificacionFechaPreventivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificacionFechaPreventivoPageRoutingModule {}
