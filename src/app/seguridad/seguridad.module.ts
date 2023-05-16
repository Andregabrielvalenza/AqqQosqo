import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguridadPageRoutingModule } from './seguridad-routing.module';

import { SeguridadPage } from './seguridad.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguridadPageRoutingModule
  ],
  declarations: [SeguridadPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SeguridadPageModule {}
