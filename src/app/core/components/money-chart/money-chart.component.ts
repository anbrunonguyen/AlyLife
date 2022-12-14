import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';
import { getChartOptions } from './money-chart-options';
@Component({
  selector: 'aly-money-chart',
  templateUrl: './money-chart.component.html',
  styleUrls: ['./money-chart.component.scss'],
})
export class MoneyChartComponent implements OnInit, OnChanges {
  @Input() chartData: any[];
  @Input() type = 'pie';
  @Input() color: string[];
  @Input() size: number;

  public highCharts: typeof Highcharts = Highcharts;
  public chartOptions: Highcharts.Options;
  constructor() {}

  ngOnInit() {
    this.chartOptions = getChartOptions(
      this.type,
      this.chartData,
      this.color,
      this.size
    );
  }

  ngOnChanges() {
    this.chartOptions = getChartOptions(
      this.type,
      this.chartData,
      this.color,
      this.size
    );
  }

  callback(chart: Chart) {
    setTimeout(() => {
      chart.setSize(300, 270);
    });
  }
}
