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
    path: 'actualizaciondispositivos',
    loadChildren: () => import('./actualizaciondispositivos/actualizaciondispositivos.module').then( m => m.ActualizaciondispositivosPageModule)
  },
  {
    path: 'mantenimiento-preventivo',
    loadChildren: () => import('./mantenimiento-preventivo/mantenimiento-preventivo.module').then( m => m.MantenimientoPreventivoPageModule)
  },
  {
    path: 'historial-dispositivos',
    loadChildren: () => import('./historial-dispositivos/historial-dispositivos.module').then( m => m.HistorialDispositivosPageModule)
  },
  {
    path: 'historial-correctivo',
    loadChildren: () => import('./historial-correctivo/historial-correctivo.module').then( m => m.HistorialCorrectivoPageModule)
  },
  {
    path: 'recuperar-contrasenia',
    loadChildren: () => import('./recuperar-contrasenia/recuperar-contrasenia.module').then( m => m.RecuperarContraseniaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
