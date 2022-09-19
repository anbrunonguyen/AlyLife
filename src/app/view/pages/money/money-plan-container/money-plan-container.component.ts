import { Component, OnInit } from '@angular/core';
import { TagPlan } from '@core/models/money/tag-plan.model';
import { MoneyService } from '@core/services/money.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Toast } from '@capacitor/toast';

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

  showHelloToast = async () => {
    await Toast.show({
      text: 'Hello!',
    });
  };
  submitChange() {
    this.isShowSlider = false;
    this.moneyService.changePlan(this.selectedTag);
    this.showHelloToast().then((result) => {
      console.log('showHelloToast');
    });

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
