import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { User } from '@core/models/user/user.model';
import { FormControl } from '@angular/forms';
// import { ImagePicker } from '@ionic-native/image-picker/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ImageService } from '@core/services/image.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'aly-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  public user: User;
  public url: any;
  public isErr = false;
  constructor(
    private userService: UserService,
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
    private store: Storage,
    private router: Router
  ) {}

  ngOnInit() {
    this.url = 'assets/img/default-avatar.png';
    this.store.ready().then(() => {
      this.store.get('user').then((data) => {
        if (data !== null || undefined) {
          this.user = data;
        } else {
          this.user = {
            name: undefined,
            avatar: this.url,
          };
        }
      });
    });
  }

  onSubmit(auth: FormControl) {
    if (this.user.password !== undefined || null || '') {
      if (
        auth.value.pass === undefined ||
        '' ||
        auth.value.pass !== this.user.password
      ) {
        this.isErr = true;
        return;
      }
      if (auth.value.pass === this.user.password) {
        setTimeout(() => {
          this.router.navigateByUrl('/home');
        }, 100);
      }
    } else {
      if (auth.value.name === undefined || '') {
        this.isErr = true;
        return;
      }
      this.isErr = false;
      this.user.name = auth.value.name;
      this.user.avatar = this.url;
      this.userService.saveUser(this.user);
      setTimeout(() => {
        this.router.navigateByUrl('/home');
      }, 200);
    }
  }

  picker() {
    this.imageService.takePicture(1000, 1000).then((image) => {
      this.url = image.webPath;
      this.user.avatar = this.url;
      this.userService.updateAvatar(image.webPath);
    });
  }

  covertUserAvatar(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
