import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioDetallePageRoutingModule } from './calendario-detalle-routing.module';

import { CalendarioDetallePage } from './calendario-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioDetallePageRoutingModule
  ],
  declarations: [CalendarioDetallePage]
})
export class CalendarioDetallePageModule {}
