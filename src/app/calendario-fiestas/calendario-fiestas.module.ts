import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioFiestasPageRoutingModule } from './calendario-fiestas-routing.module';

import { CalendarioFiestasPage } from './calendario-fiestas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioFiestasPageRoutingModule
  ],
  declarations: [CalendarioFiestasPage]
})
export class CalendarioFiestasPageModule {}
