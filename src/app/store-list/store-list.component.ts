import { Component, OnInit } from '@angular/core';
import { StoreItem } from '../store-item/store-item-helper';
import { StoreitemService } from '../services/storeitem.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {

  storeitem: StoreItem[];
  constructor(private storeitemService: StoreitemService) {
    this.storeitem = [];
  }

  ngOnInit(): void {
      this.storeitemService.getStoreitemObs().subscribe(storeitem => this.storeitem = storeitem);
  }

  addStoreItemToList(newStoreItem: StoreItem) {
      this.storeitemService.addStoreItem(newStoreItem).subscribe(c => {this.storeitem.push(c)
          const myClonedArray  = Object.assign([], this.storeitem);
          this.storeitem = myClonedArray;
      });
  }

}
