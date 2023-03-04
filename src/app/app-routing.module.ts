import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HomePageCardsComponent } from './home-page-cards/home-page-cards.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomePageCardsComponent},
  {path:'booking', component:BookingComponent},
  {path:'login', component:LoginComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
