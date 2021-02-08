import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItunesPageRoutingModule } from './itunes-routing.module';

import { ItunesPage } from './itunes.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItunesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ItunesPage]
})
export class ItunesPageModule {}
