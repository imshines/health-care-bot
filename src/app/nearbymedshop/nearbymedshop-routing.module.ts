import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbymedshopPage } from './nearbymedshop.page';

const routes: Routes = [
  {
    path: '',
    component: NearbymedshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbymedshopPageRoutingModule {}
