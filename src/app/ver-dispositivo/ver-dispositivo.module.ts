import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerDispositivoPageRoutingModule } from './ver-dispositivo-routing.module';

import { VerDispositivoPage } from './ver-dispositivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerDispositivoPageRoutingModule
  ],
  declarations: [VerDispositivoPage]
})
export class VerDispositivoPageModule {}
