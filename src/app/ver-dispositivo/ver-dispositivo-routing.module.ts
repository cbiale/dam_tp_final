import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerDispositivoPage } from './ver-dispositivo.page';

const routes: Routes = [
  {
    path: '',
    component: VerDispositivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerDispositivoPageRoutingModule {}
