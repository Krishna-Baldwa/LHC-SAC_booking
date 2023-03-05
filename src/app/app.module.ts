import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageCardsComponent } from './home-page-cards/home-page-cards.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { HeaderComponent } from './header/header.component';
import { PendingReqComponent } from './pending-req/pending-req.component';
import {HttpClientModule} from '@angular/common/http';
import { PastBookingsComponent } from './past-bookings/past-bookings.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageCardsComponent,
    LoginComponent,
    BookingComponent,
    HeaderComponent,
    PendingReqComponent,
    PastBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
