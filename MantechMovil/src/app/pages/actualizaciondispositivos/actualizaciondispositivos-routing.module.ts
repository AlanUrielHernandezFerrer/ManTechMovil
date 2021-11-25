import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizaciondispositivosPage } from './actualizaciondispositivos.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizaciondispositivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizaciondispositivosPageRoutingModule {}
