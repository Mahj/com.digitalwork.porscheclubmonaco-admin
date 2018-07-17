import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { KeysPipe } from './pipes/keys.pipe';
import { CamelToTitlePipe } from './pipes/camelToTitle.pipe';
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ModalModule, PopoverModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './list/tab/category/tab.category.component';
import { ShoppingComponent } from './list/tab/shopping/tab.shopping.component';
import { RestaurantComponent } from './list/tab/restaurant/tab.restaurant.component';
import { CartComponent } from './list/tab/cart/tab.cart.component';
import { PlacesComponent } from './list/tab/places/tab.places.component';
import { ChartComponent } from './list/tab/chart/tab.chart.component';
import { FeedComponent } from './list/tab/feed/tab.feed.component';
import { ContactComponent } from './list/tab/contact/tab.contact.component';
import { GalleryComponent } from './list/tab/gallery/tab.gallery.component';
import { MapComponent } from './list/tab/map/tab.map.component';
import { MessageComponent } from './list/tab/message/tab.message.component';
import { UserProfileComponent } from './list/tab/userProfile/tab.userProfile.component';
import { TimelineComponent } from './list/tab/timeline/tab.timeline.component';
import { DataComponent } from './list/tab/data/tab.data.component';
import { PushComponent } from './list/tab/push/tab.push.component';
import { RegisterComponent } from './list/tab/registerUser/tab.register.component';
import { FirestoreService } from './firestore/firestore.service';
import { SpinnerService } from './components/spinner/spinner.service';
import { AgmCoreModule } from '@agm/core';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { NgxEditorModule } from 'ngx-editor';

//material design
import {MatCardModule} from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { config, mapKey } from './config/config';
import { MyDatePickerModule } from 'mydatepicker';

const appRoutes: Routes = [
    //{ path: 'category', component: CategoryComponent, canActivate: [AuthGuard] },
    { path: 'shopping', component: ShoppingComponent, canActivate: [AuthGuard] },
    { path: 'places', component: PlacesComponent, canActivate: [AuthGuard] },
    { path: 'restaurant', component: RestaurantComponent, canActivate: [AuthGuard] },
    { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
    { path: 'chart', component: ChartComponent, canActivate: [AuthGuard] },
    { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
    { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
    { path: 'map', component: MapComponent, canActivate: [AuthGuard] },
    { path: 'message', component: MessageComponent, canActivate: [AuthGuard] },
    { path: 'timeline', component: TimelineComponent, canActivate: [AuthGuard] },
    { path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'data', component: DataComponent, canActivate: [AuthGuard] },
    { path: 'push', component: PushComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
    //{ path: 'login', component: LoginComponent },
   
    {
        path: '',
        redirectTo: '/shopping',
        pathMatch: 'full'
    },
    { path: '**', component: ShoppingComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CategoryComponent,
      ShoppingComponent,
      RestaurantComponent,
      CartComponent,
      PlacesComponent,
    ChartComponent,
    FeedComponent,
    ContactComponent,
    GalleryComponent,
    MapComponent,
    MessageComponent,
      UserProfileComponent,
      TimelineComponent,
      DataComponent,
      PushComponent,
      RegisterComponent,
    KeysPipe,
      CamelToTitlePipe,
      SpinnerService
  ],
  imports: [
      RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    TabsModule.forRoot(),
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AgmCoreModule.forRoot({
        apiKey: mapKey
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    MatProgressSpinnerModule,
    MatCardModule,
    NgxEditorModule,
    MyDatePickerModule
  ],
  providers: [AppComponent, FirestoreService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
