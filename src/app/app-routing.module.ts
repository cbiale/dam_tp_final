import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ver-dispositivo/:dispositivoId/:nombre',
    loadChildren: () => import('./ver-dispositivo/ver-dispositivo.module').then( m => m.VerDispositivoPageModule)
  },
  {
    path: 'ver-mediciones/:dispositivoId',
    loadChildren: () => import('./ver-mediciones/ver-mediciones.module').then( m => m.VerMedicionesPageModule)
  },
  {
    path: 'ver-logs/:electrovalvulaId',
    loadChildren: () => import('./ver-logs/ver-logs.module').then( m => m.VerLogsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
