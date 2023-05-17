import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiccionarioQuechuaPage } from './diccionario-quechua.page';

const routes: Routes = [
  {
    path: '',
    component: DiccionarioQuechuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiccionarioQuechuaPageRoutingModule {}
