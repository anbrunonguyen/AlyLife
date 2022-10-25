import { DialogData } from '@core/models/template/dialog-data.model';
import { NoteService } from '@core/services/note.service';
import { DialogService } from '@core/services/dialog.service';
import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ElementRef,
} from '@angular/core';
import { MoneyService } from '@core/services/money.service';

@Component({
  selector: 'aly-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit, OnDestroy {
  @ViewChild('overlay') overlay: ElementRef;
  @ViewChild('dialog') dialog: ElementRef;
  public data: DialogData;
  private selectItem: string;
  constructor(
    private dialogService: DialogService,
    private noteService: NoteService,
    private moneyService: MoneyService
  ) {}

  ngOnInit() {}

  hideDialog(): void {
    this.overlay.nativeElement.classList.add('hide-smooth');
    this.dialog.nativeElement.classList.remove('magictime', 'spaceInUp');
    this.dialog.nativeElement.classList.add('magictime', 'spaceOutUp');
    setTimeout(() => {
      this.dialogService.removeDialogComponentFromBody();
    }, 500);
  }

  onDialogClicked(evt: MouseEvent): void {
    evt.stopPropagation();
  }

  ngOnDestroy(): void {
    if (this.selectItem === undefined) {
      return;
    }
    this.noteService.tagOnSelect.next(this.selectItem);
  }

  select(data: string): void {
    this.selectItem = data;
  }

  confirmYes() {
    if (this.data.isRemoveWallet) {
      this.moneyService.removeWallet(this.data.data);
    } else {
      this.noteService.deleteNote(this.data.data);
    }
    this.hideDialog();
  }

  confirmNo() {
    this.hideDialog();
  }
}
