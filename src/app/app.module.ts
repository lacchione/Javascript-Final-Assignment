import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { StoreListComponent } from './store-list/store-list.component';
import { NewItemComponent, NewItemDialogComponent } from './new-item/new-item.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoreItemComponent,
    StoreListComponent,
    NewItemComponent,
    NewItemDialogComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false, delay: 1000   }),
      RouterModule.forRoot(
          [  { path: 'StoreItem/Newitem', component: NewItemComponent },
                    { path: 'StoreItem', component: StoreListComponent },
                    { path: '', component: HomeComponent },
                    { path: '**', component: NotFoundComponent }])
  ],
  entryComponents: [
      NewItemDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
