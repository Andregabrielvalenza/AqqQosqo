import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CulturaDetallePageRoutingModule } from './cultura-detalle-routing.module';

import { CulturaDetallePage } from './cultura-detalle.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CulturaDetallePageRoutingModule
  ],
  declarations: [CulturaDetallePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CulturaDetallePageModule {}
