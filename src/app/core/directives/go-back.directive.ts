import { Directive, HostListener } from '@angular/core';
import { NavController } from '@ionic/angular';
@Directive({
  selector: '[alyGoBack]',
})
export class GoBackDirective {
  constructor(private navCtrl: NavController) {}
  @HostListener('click') goBack() {
    this.navCtrl.back();
  }
}
