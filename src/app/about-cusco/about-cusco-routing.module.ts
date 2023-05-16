import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutCuscoPage } from './about-cusco.page';

const routes: Routes = [
  {
    path: '',
    component: AboutCuscoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutCuscoPageRoutingModule {}
