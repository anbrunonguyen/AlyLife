import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class BabyService {
  public babyImgs = [];
  constructor(private store: Storage) {}
  saveBabyImgs() {}
}
