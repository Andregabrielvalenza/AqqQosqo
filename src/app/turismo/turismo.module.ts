import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurismoPageRoutingModule } from './turismo-routing.module';

import { TurismoPage } from './turismo.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurismoPageRoutingModule
  ],
  declarations: [TurismoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TurismoPageModule {}
