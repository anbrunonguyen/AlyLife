import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthPageRoutingModule } from './health-routing.module';

import { HealthPage } from './health.page';
import { SharedModule } from '@core/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthPageRoutingModule,
    SharedModule,
  ],
  declarations: [HealthPage],
})
export class HealthPageModule {}
