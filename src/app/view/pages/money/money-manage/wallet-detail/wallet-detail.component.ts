import { Component, OnInit, Input } from '@angular/core';
import { Wallet } from '@core/models/money/wallet.model';
import { DialogData } from '@core/models/template/dialog-data.model';
import { MoneyService } from '@core/services/money.service';

@Component({
  selector: 'aly-wallet-detail',
  templateUrl: './wallet-detail.component.html',
  styleUrls: ['./wallet-detail.component.scss'],
})
export class WalletDetailComponent implements OnInit {
  @Input() wallet: Wallet;
  public dataDelete: DialogData;
  public editBtn: any;
  public income = 0;
  public outcome = 0;
  private walletElement: any;
  private deleteBtn: any;
  constructor(private moneyService: MoneyService) {}

  ngOnInit() {
    this.moneyService.initMoneyService.subscribe((data) => {
      this.getInOutCome();
    });
    this.dataDelete = {
      type: 'confirm',
      data: this.wallet.id,
      isRemoveWallet: true,
    };
  }

  getInOutCome() {
    this.wallet.transactions.forEach((transaction) => {
      this.income += transaction.income;
      this.outcome += transaction.outcome;
    });
  }

  removeWallet(id: string) {
    this.moneyService.removeWallet(id);
  }

  letTest(): void {
    if (this.walletElement === undefined) {
      this.walletElement = document.querySelectorAll('.wallet-card');
      this.deleteBtn = document.querySelectorAll('.delete');
      // this.editBtn = document.querySelectorAll('.edit');
    }
    this.walletElement.forEach((note: HTMLElement) => {
      note.classList.remove('fadeInUp');
      note.classList.add('shake');
    });
    this.deleteBtn.forEach((del: HTMLElement) => {
      del.classList.remove('hide');
    });
    // this.editBtn.forEach((del: HTMLElement) => {
    //   del.classList.remove('hide');
    // });
  }
}
