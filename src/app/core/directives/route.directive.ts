import { Directive, Input, HostListener } from '@angular/core';
import { NavController } from '@ionic/angular';

@Directive({
  selector: '[alyRoute]',
})
export class RouteDirective {
  @Input() route: string;
  constructor(private navCtrl: NavController) {}

  @HostListener('click') routeToPage() {
    setTimeout(() => {
      this.navCtrl.navigateForward(this.route);
    }, 50);
  }
}
