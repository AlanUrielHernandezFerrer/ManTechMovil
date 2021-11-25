import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialCorrectivoPage } from './historial-correctivo.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialCorrectivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialCorrectivoPageRoutingModule {}
