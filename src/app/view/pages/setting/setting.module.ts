import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPageRoutingModule } from './setting-routing.module';

import { SettingPage } from './setting.page';
import { SharedModule } from '@core/shared/shared/shared.module';
import { PasswordComponent } from './password/password.component';
import { UserComponent } from './user/user.component';
import { ThemeComponent } from './theme/theme.component';
import { ColorPickerModule } from 'ngx-color-picker';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingPageRoutingModule,
    SharedModule,
    ColorPickerModule,
  ],
  declarations: [SettingPage, PasswordComponent, UserComponent, ThemeComponent],
})
export class SettingPageModule {}
