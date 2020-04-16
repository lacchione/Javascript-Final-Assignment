import { Injectable } from '@angular/core';
import { StoreItem } from './store-item/store-item-helper';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {StoreItemList} from './contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() {
  }

  createDb() {
      const StoreItem = StoreItemList;
      return { StoreItem };
  }

  genId(storeitem: StoreItem[]): number {
      return storeitem.length > 0 ? Math.max(...storeitem.map(c => c.id)) + 1 : 2000;
  }
}
