import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoCorrectivoPage } from './mantenimiento-correctivo.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoCorrectivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoCorrectivoPageRoutingModule {}
