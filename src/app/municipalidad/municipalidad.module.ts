import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MunicipalidadPageRoutingModule } from './municipalidad-routing.module';

import { MunicipalidadPage } from './municipalidad.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MunicipalidadPageRoutingModule
  ],
  declarations: [MunicipalidadPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MunicipalidadPageModule {}
