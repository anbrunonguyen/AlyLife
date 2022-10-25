import { Component, OnInit } from '@angular/core';
import { GalleryPhotos } from '@capacitor/camera';
import { ImageService } from '@core/services/image.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'aly-baby',
  templateUrl: './baby.page.html',
  styleUrls: ['./baby.page.scss'],
})
export class BabyPage implements OnInit {
  public imgSrc: GalleryPhotos;
  constructor(
    private imageService: ImageService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.imageService.checkPermission();
  }

  pickPhotos() {
    this.imageService.pickImage().then((data) => {
      this.imgSrc = data;
      this.imgSrc.photos.forEach((e) => {
        (e.webPath as any) = this.sanitizer.bypassSecurityTrustUrl(e.webPath);
      });
    });
  }
}
