import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItunesPage } from './itunes.page';

const routes: Routes = [
  {
    path: '',
    component: ItunesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItunesPageRoutingModule {}
