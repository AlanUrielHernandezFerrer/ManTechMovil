import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialDispositivosPage } from './historial-dispositivos.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialDispositivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialDispositivosPageRoutingModule {}
