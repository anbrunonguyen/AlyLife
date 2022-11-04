import { Injectable } from '@angular/core';
import { HealthData } from '@core/models/health/health.model';
import { Health } from '@core/models/money/wallet.model';

@Injectable({
  providedIn: 'root',
})
export class HealthService {
  public health: Health[] = [];

  initMoneyService: any;
  storage: any;
  constructor() {}
  get getHealth() {
    return this.health;
  }
  saveHealth(a) {
    this.storage.ready().then(() => {
      this.storage.set(`health`, a).then((data) => {});
    });
  }
}
