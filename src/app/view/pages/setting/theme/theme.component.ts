import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'aly-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {
  public variableList: any[] = [
    { title: 'Màu nền', value: '--background-color' },
    { title: 'Màu chữ', value: '--font-color' },
    { title: 'Màu thẻ', value: '--main-color' },
  ];
  public color: any;
  public variable = '--background-color';
  private colorStorage = {
    '--background-color': '',
    '--font-color': '',
    '--main-color': '',
  };
  constructor(private store: Storage, private snackBar: MatSnackBar) {}

  ngOnInit() {}

  public saveColor() {
    this.store.ready().then(() => {
      document
        .querySelector('body')
        .style.setProperty(this.variable, this.color);
      this.store.get('Color').then((data: any) => {
        if (data) {
          this.colorStorage = data;
        }
        this.colorStorage[this.variable] = this.color;
        this.store.set('Color', this.colorStorage).then();
        this.snackBar.open('Thành công rồi!!!', '', { duration: 1000 });
      });
    });
  }
}
