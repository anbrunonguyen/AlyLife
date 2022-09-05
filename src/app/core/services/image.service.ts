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

  pickImage() {
    return Camera.pickImages({
      quality: 100,
    });
  }

  takePicture() {
    return Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
  }
}
