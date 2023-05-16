import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CulturaPageRoutingModule } from './cultura-routing.module';

import { CulturaPage } from './cultura.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CulturaPageRoutingModule
  ],
  declarations: [CulturaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CulturaPageModule {}
