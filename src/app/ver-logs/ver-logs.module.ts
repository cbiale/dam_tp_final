import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerLogsPageRoutingModule } from './ver-logs-routing.module';

import { VerLogsPage } from './ver-logs.page';

import { FormatoFechaPipe } from '../pipes/formato-fecha.pipe';
import { FormatoEstadoPipe } from '../pipes/formato-estado.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerLogsPageRoutingModule
  ],
  declarations: [VerLogsPage, FormatoFechaPipe, FormatoEstadoPipe]
})
export class VerLogsPageModule {}
