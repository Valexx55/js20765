import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdivinaPageRoutingModule } from './adivina-routing.module';

import { AdivinaPage } from './adivina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdivinaPageRoutingModule
  ],
  declarations: [AdivinaPage]
})
export class AdivinaPageModule {}
