import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialPreventivoPage } from './historial-preventivo.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialPreventivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialPreventivoPageRoutingModule {}
