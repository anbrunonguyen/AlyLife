import { Component, OnInit } from '@angular/core';
import { TagPlan } from '@core/models/money/tag-plan.model';
import { MoneyService } from '@core/services/money.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { showSuccessToast } from '@core/helper/showToast';

@Component({
  selector: 'aly-money-plan-container',
  templateUrl: './money-plan-container.component.html',
  styleUrls: ['./money-plan-container.component.scss'],
})
export class MoneyPlanContainerComponent implements OnInit {
  public incomePlan: TagPlan[];
  public outcomePlan: TagPlan[];
  public selectedTag: TagPlan;
  public isShowSlider = false;
  public incomeTotal: number;
  public outcomeTotal: number;
  constructor(
    private moneyService: MoneyService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.moneyService.initMoneyService.subscribe(() => {
      this.incomePlan = this.moneyService.incomePlan;
      this.outcomePlan = this.moneyService.outcomePlan;
      this.calculateIncomeTotal();
      this.calculateOutcomeTotal();
    });
  }

  choose(plan: TagPlan) {
    this.selectedTag = plan;
    this.isShowSlider = true;
  }

  submitChange() {
    this.isShowSlider = false;
    this.moneyService.changePlan(this.selectedTag);
    showSuccessToast();
    this.calculateIncomeTotal();
    this.calculateOutcomeTotal();
  }

  calculateIncomeTotal() {
    this.incomeTotal = this.incomePlan.reduce(
      (total, income) => total + income.value,
      0
    );
  }

  calculateOutcomeTotal() {
    this.outcomeTotal = this.outcomePlan.reduce(
      (total, income) => total + income.value,
      0
    );
  }
}
