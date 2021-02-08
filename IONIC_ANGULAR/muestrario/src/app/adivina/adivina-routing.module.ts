import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdivinaPage } from './adivina.page';

const routes: Routes = [
  {
    path: '',
    component: AdivinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdivinaPageRoutingModule {}
