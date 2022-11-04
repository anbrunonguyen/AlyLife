import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { gender } from '@core/data/money';
import { Health } from '@core/models/money/wallet.model';
import { HealthService } from '@core/services/health.service';

@Component({
  selector: 'aly-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {
  public type = gender;
  public health: Health[];
  constructor(private healthService: HealthService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
