import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiccionarioQuechuaPageRoutingModule } from './diccionario-quechua-routing.module';

import { DiccionarioQuechuaPage } from './diccionario-quechua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiccionarioQuechuaPageRoutingModule
  ],
  declarations: [DiccionarioQuechuaPage]
})
export class DiccionarioQuechuaPageModule {}
