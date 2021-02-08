import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DniPageRoutingModule } from './dni-routing.module';

import { DniPage } from './dni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DniPageRoutingModule
  ],
  declarations: [DniPage]
})
export class DniPageModule {}
