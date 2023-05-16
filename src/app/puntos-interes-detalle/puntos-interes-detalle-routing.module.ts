import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntosInteresDetallePage } from './puntos-interes-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PuntosInteresDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntosInteresDetallePageRoutingModule {}
