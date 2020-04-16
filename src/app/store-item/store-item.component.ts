import { Component, Input, OnInit } from '@angular/core';
import {StoreItem} from './store-item-helper';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})
export class StoreItemComponent implements OnInit {
  @Input() storeitem: StoreItem;
  constructor() { }

  ngOnInit(): void {
  }

}
