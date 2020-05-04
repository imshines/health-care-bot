import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyhospitalPage } from './nearbyhospital.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyhospitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyhospitalPageRoutingModule {}
