import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListapelisPage } from './listapelis.page';

const routes: Routes = [
  {
    path: '',
    component: ListapelisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListapelisPageRoutingModule {}
