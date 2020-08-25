import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMedicionesPage } from './ver-mediciones.page';

const routes: Routes = [
  {
    path: '',
    component: VerMedicionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMedicionesPageRoutingModule {}
