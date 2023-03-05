import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HeaderComponent } from './header/header.component';
import { HomePageCardsComponent } from './home-page-cards/home-page-cards.component';
import { LoginComponent } from './login/login.component';
import { PastBookingsComponent } from './past-bookings/past-bookings.component';

const routes: Routes = [
  {path:'', component:HomePageCardsComponent},
  {path:'home', component:HomePageCardsComponent},
  {path:'booking', component:BookingComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:HeaderComponent},
  {path:'past', component:PastBookingsComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
