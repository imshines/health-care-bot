import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyhospitalPageRoutingModule } from './nearbyhospital-routing.module';

import { NearbyhospitalPage } from './nearbyhospital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyhospitalPageRoutingModule
  ],
  declarations: [NearbyhospitalPage]
})
export class NearbyhospitalPageModule {}
