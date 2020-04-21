import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedshopsPage } from './medshops.page';

const routes: Routes = [
  {
    path: '',
    component: MedshopsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedshopsPageRoutingModule {}
