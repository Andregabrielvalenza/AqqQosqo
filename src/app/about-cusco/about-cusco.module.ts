import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutCuscoPageRoutingModule } from './about-cusco-routing.module';

import { AboutCuscoPage } from './about-cusco.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutCuscoPageRoutingModule
  ],
  declarations: [AboutCuscoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutCuscoPageModule {}
