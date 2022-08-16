import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BabyPageRoutingModule } from './baby-routing.module';

import { BabyPage } from './baby.page';
import { SharedModule } from '@core/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BabyPageRoutingModule,
    SharedModule,
  ],
  declarations: [BabyPage],
})
export class BabyPageModule {}
