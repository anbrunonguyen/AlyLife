import { ChangePlanDirective } from './../../directives/change-plan.directive';
import { DialogDirective } from '@core/directives/dialog.directive';
import { DialogComponent } from '@core/components/templates/dialog/dialog.component';
import { NoteOverviewComponent } from '@core/components/note-overview/note-overview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotePreviewComponent } from '@core/components/note-preview/note-preview.component';
import { NoteBackgroundDirective } from '@core/directives/note-background.directive';
import { MaterialModule } from '@core/modules/material/material.module';
import { TouchReactDirective } from '@core/directives/touch-react.directive';
import { ScaleFullDirective } from '@core/directives/scale-full.directive';
import { RouteDirective } from '@core/directives/route.directive';
import { MoneyPreviewComponent } from '@core/components/money-preview/money-preview.component';
import { CommonFormComponent } from '@core/components/templates/common-form/common-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { MoneyChartComponent } from '@core/components/money-chart/money-chart.component';
import { GoBackDirective } from '@core/directives/go-back.directive';
import { NumberPipe } from '@core/pipe/numberPipe.pipe';

const components = [
  NoteOverviewComponent,
  NotePreviewComponent,
  DialogComponent,
  DialogDirective,
  CommonFormComponent,
  NoteBackgroundDirective,
  TouchReactDirective,
  ScaleFullDirective,
  RouteDirective,
  MoneyPreviewComponent,
  ChangePlanDirective,
  MoneyChartComponent,
  GoBackDirective,
  NumberPipe,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule,
  ],
  exports: [components, MaterialModule],
  entryComponents: [DialogComponent],
})
export class SharedModule {}
