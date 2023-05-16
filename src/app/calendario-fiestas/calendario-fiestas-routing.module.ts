import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioFiestasPage } from './calendario-fiestas.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioFiestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioFiestasPageRoutingModule {}
