import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoPreventivoPage } from './mantenimiento-preventivo.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoPreventivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoPreventivoPageRoutingModule {}
