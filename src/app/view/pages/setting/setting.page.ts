import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { User } from '@core/models/user/user.model';
import { ImageService } from '@core/services/image.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'aly-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  public user: User;
  public url: any;
  constructor(
    private userService: UserService,
    private imageService: ImageService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.user = this.userService.user;
    this.imageService.checkPermission();
  }

  picker() {
    this.imageService.pickImage(500, 500, 1).then((image) => {
      this.userService.updateAvatar(image.photos[0].webPath);
    });
  }

  takePicture() {
    this.imageService.takePicture(1000, 1000).then((image) => {
      this.userService.updateAvatar(image.webPath);
    });
  }

  covertUserAvatar(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
