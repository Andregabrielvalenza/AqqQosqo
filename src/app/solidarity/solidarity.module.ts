import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolidarityPageRoutingModule } from './solidarity-routing.module';

import { SolidarityPage } from './solidarity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolidarityPageRoutingModule
  ],
  declarations: [SolidarityPage]
})
export class SolidarityPageModule {}
