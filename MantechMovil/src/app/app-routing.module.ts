import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('src/app/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'pantalla-inicial',
    pathMatch: 'full'
  },
  {
    path: 'clave-empresa',
    loadChildren: () => import('src/app/pages/clave-empresa/clave-empresa.module').then( m => m.ClaveEmpresaPageModule)
  },
  {
    path: 'registro-empleado',
    loadChildren: () => import('src/app/pages/registro-empleado/registro-empleado.module').then( m => m.RegistroEmpleadoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('src/app/pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'actualizaciondispositivos',
    loadChildren: () => import('src/app/pages/actualizaciondispositivos/actualizaciondispositivos.module').then( m => m.ActualizaciondispositivosPageModule)
  },
  {
    path: 'mantenimiento-preventivo',
    loadChildren: () => import('src/app/pages/mantenimiento-preventivo/mantenimiento-preventivo.module').then( m => m.MantenimientoPreventivoPageModule)
  },
  {
    path: 'historial-dispositivos',
    loadChildren: () => import('src/app/pages/historial-dispositivos/historial-dispositivos.module').then( m => m.HistorialDispositivosPageModule)
  },
  {
    path: 'historial-correctivo',
    loadChildren: () => import('src/app/pages/historial-correctivo/historial-correctivo.module').then( m => m.HistorialCorrectivoPageModule)
  },
  {
    path: 'recuperar-contrasenia',
    loadChildren: () => import('src/app/pages/recuperar-contrasenia/recuperar-contrasenia.module').then( m => m.RecuperarContraseniaPageModule)
  },
  {
    path: 'pantalla-inicial',
    loadChildren: () => import('src/app/pages/pantalla-inicial/pantalla-inicial.module').then( m => m.PantallaInicialPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-dispositivos',
    loadChildren: () => import('src/app/pages/registro-dispositivos/registro-dispositivos.module').then( m => m.RegistroDispositivosPageModule)
  },
  {
    path: 'dispositivo',
    loadChildren: () => import('src/app/pages/dispositivo/dispositivo.module').then( m => m.DispositivoPageModule)
  },
  {
    path: 'mantenimiento-correctivo',
    loadChildren: () => import('src/app/pages/mantenimiento-correctivo/mantenimiento-correctivo.module').then( m => m.MantenimientoCorrectivoPageModule)
  },
  {
    path: 'modificacion-fecha-preventivo',
    loadChildren: () => import('src/app/pages/modificacion-fecha-preventivo/modificacion-fecha-preventivo.module').then( m => m.ModificacionFechaPreventivoPageModule)
  },
  {
    path: 'historial-preventivo',
    loadChildren: () => import('src/app/pages/historial-preventivo/historial-preventivo.module').then( m => m.HistorialPreventivoPageModule)
  },
  {
    path: 'recuperar-clave',
    loadChildren: () => import('src/app/pages/recuperar-clave/recuperar-clave.module').then( m => m.RecuperarClavePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
