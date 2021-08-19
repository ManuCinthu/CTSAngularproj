import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.css']
})
export class ManageBookingComponent implements OnInit {


  
  constructor(private fb:FormBuilder) { }

 managebookingForm=this.fb.group({
    managebookingId:['']
  });

  ngOnInit(): void {
  }


  


}
