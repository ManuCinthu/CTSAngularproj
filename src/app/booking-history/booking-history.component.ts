import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Bookinghistory } from '../models/bookinghistory';
import { BookinghistoryService } from '../services/bookinghistory.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {


  bookinghistory:Bookinghistory[] = [];
  constructor(private fb:FormBuilder,private bookinghistoryservice:BookinghistoryService) { }

 bookinghistoryForm=this.fb.group({
  bookinghistoryId:['']
  });

  ngOnInit(): void {
  }

  fetchAllBookings(){
    this.bookinghistoryservice.fetchBookings().subscribe((res:any)=>{
      console.log(res);
      this.bookinghistory = res;
      console.log("after req sent...")
    });   
  }


  fetchfightsbyId(id:number){
    console.log(id)
    this.bookinghistoryservice.fetchBookingsById(id).subscribe((res:any)=>{
      console.log(res);
      this.fetchAllBookings();
    })
  }

}
