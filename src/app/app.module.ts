import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// Virtual scroll
import {ScrollingModule} from '@angular/cdk/scrolling';
// Angular components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProductsComponent } from './components/products/products.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { UserComponent } from './components/user/user.component';
import { ProductComponent } from './components/product/product.component';
// Forms control
import {FormsModule} from '@angular/forms';

// Angular firebase
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChatComponent,
    ProductsComponent,
    CarouselComponent,
    UserComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
