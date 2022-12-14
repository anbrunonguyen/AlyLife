import { Component, OnInit } from '@angular/core';
import { moneyIncomeType, moneyOutcomeType } from '@core/data/money';
import { MoneyService } from '@core/services/money.service';
import { Wallet } from '@core/models/money/wallet.model';
import { NgForm } from '@angular/forms';
import { randomID } from '@core/helper/random-id';
import { getToday } from '@core/helper/getToday';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { showSuccessToast } from '@core/helper/showToast';

@Component({
  selector: 'aly-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss'],
})
export class AddMoneyComponent implements OnInit {
  public type = moneyOutcomeType;
  public wallets: Wallet[];
  public isInTransferMode = false;
  constructor(
    private moneyService: MoneyService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.wallets = this.moneyService.getWallet;
  }

  selectTags(type) {
    if (type === 'transfer') {
      this.isInTransferMode = true;
    } else {
      this.isInTransferMode = false;
    }
    if (type === 'income') {
      this.type = moneyIncomeType;
    } else {
      this.type = moneyOutcomeType;
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const data = form.value;
    data.money = parseInt(form.value.money.replaceAll(',', ''), 10);

    if (this.isInTransferMode) {
      const moneyTransfer = data;
      moneyTransfer.id = 'bill_' + randomID();
      moneyTransfer.date = new Date();
      this.moneyService.transferMoney(moneyTransfer);
      showSuccessToast();
      this.router.navigateByUrl('/money');
      return;
    }
    const moneyBill = data;
    moneyBill.id = 'bill_' + randomID();
    moneyBill.date = new Date();
    this.moneyService.addBillByDay(moneyBill, getToday(moneyBill.date));
    showSuccessToast();
    this.router.navigateByUrl('/money');
  }
}
