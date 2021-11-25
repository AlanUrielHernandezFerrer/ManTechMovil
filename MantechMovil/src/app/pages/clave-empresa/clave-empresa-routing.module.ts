import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaveEmpresaPage } from './clave-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: ClaveEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaveEmpresaPageRoutingModule {}
