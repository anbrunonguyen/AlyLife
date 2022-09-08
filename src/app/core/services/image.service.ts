import { Injectable } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}

  checkPermission() {
    Camera.requestPermissions();
  }

  pickImage(width?: number, height?: number, limit?: number) {
    return Camera.pickImages({
      quality: 100,
      width,
      height,
      limit,
      correctOrientation: true,
    });
  }

  takePicture(width?: number, height?: number) {
    return Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      width,
      height,
    });
  }
}
