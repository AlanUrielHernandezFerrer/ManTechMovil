import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDispositivosPage } from './registro-dispositivos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDispositivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDispositivosPageRoutingModule {}
