import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserBookComponent } from './user-book/user-book.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { AppRoutingModule } from './app-routing.module';
import { SearhResultsComponent } from './searh-results/searh-results.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { ManageairlinesComponent } from './manageairlines/manageairlines.component';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { LoginComponent } from './login/login.component';
// import { AddairlineComponent } from './addairline/addairline.component';
// import { ManagescheduleComponent } from './manageschedule/manageschedule.component';

@NgModule({
  declarations: [
    AppComponent,
    UserBookComponent,
    TicketBookingComponent,
    ManageBookingComponent,
    BookingHistoryComponent,
    SearhResultsComponent,
    LoginmoduleComponent,
    ManageairlinesComponent,
    RegisterComponent,
    // LoginComponent,
    // AddairlineComponent,
    // ManagescheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
