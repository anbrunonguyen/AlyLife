import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { User } from '@core/models/user/user.model';
import { Router } from '@angular/router';
import { UserService } from '@core/services/user.service';
import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'aly-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
    private store: Storage,
    private router: Router,
    private userService: UserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // SplashScreen.show({
      //   showDuration: 300,
      //   autoHide: true,
      // });
      if (this.platform.is('android')) {
        StatusBar.hide();
      }
    });
  }

  ngOnInit() {
    // document.querySelector('body').style.setProperty('--main-color', 'red');
    this.store.ready().then(() => {
      this.store.get('Color').then((data: any) => {
        if (this.platform.is('android')) {
          StatusBar.setOverlaysWebView({ overlay: true });
        }
        if (data) {
          Object.keys(data).forEach((key) => {
            if (data[key]) {
              document.querySelector('body').style.setProperty(key, data[key]);
            }
          });
        }
      });
      this.store.get('user').then((data: User) => {
        if (data == null) {
          this.router.navigateByUrl('/auth');
        } else {
          this.userService.user = data;
          if (this.userService.user.password !== undefined) {
            this.router.navigateByUrl('/auth');
          } else {
            this.router.navigateByUrl('/home');
          }
          return;
        }
      });
    });
  }
}
