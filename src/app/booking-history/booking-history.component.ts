import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

 bookinghistoryForm=this.fb.group({
  bookinghistoryId:['']
  });

  ngOnInit(): void {
  }

}
