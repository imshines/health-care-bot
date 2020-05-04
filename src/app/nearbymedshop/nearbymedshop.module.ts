import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbymedshopPageRoutingModule } from './nearbymedshop-routing.module';

import { NearbymedshopPage } from './nearbymedshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbymedshopPageRoutingModule
  ],
  declarations: [NearbymedshopPage]
})
export class NearbymedshopPageModule {}
