import {Component, OnInit, Output, EventEmitter, Input, Inject} from '@angular/core';
import {StoreItem} from '../store-item/store-item-helper';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  newStoreItem: StoreItem;
}

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  @Input() startingId;
  @Output() newStoreItemEvent = new EventEmitter<StoreItem>();
  newStoreItem: StoreItem;
  currentId: number;
  constructor(public dialog: MatDialog) {
    this.resetNewStoreItem();
  }

  ngOnInit(): void {
    this.currentId = this.startingId;
  }
  resetNewStoreItem() {
    this.newStoreItem = {
      item_name: '',
      item_desc: '',
      quantity: 0
    };
  }
  addContent(): void{
    this.newStoreItemEvent.emit(this.newStoreItem);
    this.resetNewStoreItem();
  }
  openDialog() {
    const dialogRef = this.dialog.open(NewItemDialogComponent, {
      width: '350px',
      data: {newStoreItem: this.newStoreItem}
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        this.newStoreItem = result;
        this.addContent();
    });
  }
}

@Component({
    selector: 'new-item-dialog',
    template: './new-item-dialog.component.html'
})

export class NewItemDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<NewItemDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
