import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperadoresAutorizadosPageRoutingModule } from './operadores-autorizados-routing.module';

import { OperadoresAutorizadosPage } from './operadores-autorizados.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperadoresAutorizadosPageRoutingModule
  ],
  declarations: [OperadoresAutorizadosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OperadoresAutorizadosPageModule {}
