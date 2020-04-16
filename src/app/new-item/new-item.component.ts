import {Component, OnInit, Output, EventEmitter, Input, Inject} from '@angular/core';
import {StoreItem} from '../store-item/store-item-helper';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StoreitemService } from '../services/storeitem.service';

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
  storeitem: StoreItem[];
  constructor(public dialog: MatDialog, private storeitemService: StoreitemService) {
    this.resetNewStoreItem();
    this.storeitem = [];
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
      this.storeitemService.addStoreItem(this.newStoreItem).subscribe(c => {this.storeitem.push(c)
          const myClonedArray  = Object.assign([], this.storeitem);
          this.storeitem = myClonedArray;
      });
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
    templateUrl: './new-item-dialog.component.html'
})

export class NewItemDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<NewItemDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
