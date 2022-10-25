import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BabyPage } from './baby.page';

const routes: Routes = [
  {
    path: '',
    component: BabyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BabyPageRoutingModule {}
