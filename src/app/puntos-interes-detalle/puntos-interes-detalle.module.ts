import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntosInteresDetallePageRoutingModule } from './puntos-interes-detalle-routing.module';

import { PuntosInteresDetallePage } from './puntos-interes-detalle.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntosInteresDetallePageRoutingModule
  ],
  declarations: [PuntosInteresDetallePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PuntosInteresDetallePageModule {}
