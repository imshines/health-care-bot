import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedshopsPageRoutingModule } from './medshops-routing.module';

import { MedshopsPage } from './medshops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedshopsPageRoutingModule
  ],
  declarations: [MedshopsPage]
})
export class MedshopsPageModule {}
