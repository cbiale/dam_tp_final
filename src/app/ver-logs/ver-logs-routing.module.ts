import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerLogsPage } from './ver-logs.page';

const routes: Routes = [
  {
    path: '',
    component: VerLogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerLogsPageRoutingModule {}
