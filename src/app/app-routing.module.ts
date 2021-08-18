import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserBookComponent } from './user-book/user-book.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { SearhResultsComponent } from './searh-results/searh-results.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { UsermoduleComponent } from './usermodule/usermodule.component';


// const routes: Routes=[
//   {path:'login', component:LoginmoduleComponent},
//   {path: 'register', component: RegisterComponent},
//   {path:'home', component:UsermoduleComponent},
//   {path:'managebookingId', component:ManageBookingComponent},
//   {path:'bookinghistoryId', component:BookingHistoryComponent},
//   {path:'searchresultId',component:SearhResultsComponent},
//   {path:'ticketbookingId',component:TicketBookingComponent},
//   {path:'', redirectTo:'login',pathMatch:'full'}
// ];

const routes: Routes = [
  { path: 'login', component: LoginmoduleComponent },
  {
    path: 'home', component: UsermoduleComponent,
    children: [
      {
        path: 'searchresultId', component: SearhResultsComponent,
        children: [
          {
            path: 'ticketbookingId', component: TicketBookingComponent
          }
        ]
      },
      { path: 'managebookingId', component: ManageBookingComponent },
      { path: 'bookinghistoryId', component: BookingHistoryComponent },
      {path:'userbookId', component:UserBookComponent},
      {path:'',redirectTo:'userbookId', pathMatch:'full'}
    ]
  },



  { path: '', redirectTo: 'login', pathMatch: 'full' }
]

@NgModule({

  imports: [[RouterModule.forRoot(routes)], CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
