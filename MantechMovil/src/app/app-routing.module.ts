import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'clave-empresa',
    pathMatch: 'full'
  },
  {
    path: 'clave-empresa',
    loadChildren: () => import('./clave-empresa/clave-empresa.module').then( m => m.ClaveEmpresaPageModule)
  },
  {
    path: 'registro-empleado',
    loadChildren: () => import('./registro-empleado/registro-empleado.module').then( m => m.RegistroEmpleadoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'actualizacion-dispositos',
    loadChildren: () => import('./actualizacion-dispositos/actualizacion-dispositos.module').then( m => m.ActualizacionDispositosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
