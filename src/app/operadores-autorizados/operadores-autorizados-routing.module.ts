import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperadoresAutorizadosPage } from './operadores-autorizados.page';

const routes: Routes = [
  {
    path: '',
    component: OperadoresAutorizadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperadoresAutorizadosPageRoutingModule {}
