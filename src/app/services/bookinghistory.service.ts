import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookinghistoryService {

  url = "http://localhost:3000/bookinghistory";

  constructor(private httpClient:HttpClient) { }


  fetchBookings(){
    console.log("fetching all bookings...")
    return this.httpClient.get(this.url);
}
fetchBookingsById(id:number){
    return this.httpClient.get(this.url+"/"+id);
}
}
