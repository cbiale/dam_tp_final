import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormatoFechaPipe } from '../pipes/formato-fecha.pipe';
import { EstadoDirective } from '../directivas/estado.directive';


import { VerMedicionesPageRoutingModule } from './ver-mediciones-routing.module';

import { VerMedicionesPage } from './ver-mediciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMedicionesPageRoutingModule,
  ],
  declarations: [VerMedicionesPage, FormatoFechaPipe, EstadoDirective]
})
export class VerMedicionesPageModule {}
