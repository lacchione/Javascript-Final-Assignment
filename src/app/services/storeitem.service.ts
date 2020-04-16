import { Injectable } from '@angular/core';
import { StoreItem } from '../store-item/store-item-helper';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreitemService {

  constructor(private http: HttpClient) { }

    getStoreitemObs(): Observable<StoreItem[]> {
        return this.http.get<StoreItem[]>('api/StoreItem');
  }

  private httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  addStoreItem(storeitem: StoreItem): Observable<StoreItem> {
      return this.http.post<StoreItem>('api/StoreItem', storeitem, this.httpOptions);
  }
}
