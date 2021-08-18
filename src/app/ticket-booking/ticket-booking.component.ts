import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
ticketbookingvalidateForm= this.fb.group(
    {
      nameId: ['',[Validators.required]],
      emailId:['',[Validators.required]],
      pplId:['',[Validators.required]],
      // preferencesId:['',[Validators.required]],
    }
  );
  isSubmitted: boolean=false;

  constructor(private fb:FormBuilder, private router:Router) { }

 ticketbookingForm=this.fb.group({
    ticketbookingId:['']
  });

  handleSubmit(){
    this.isSubmitted = true;
  }

  fc(){
    return this.ticketbookingvalidateForm.controls;
  }

  btnClick() {
    this.router.navigateByUrl('/home');
};


btnClickBack(){
  this.router.navigateByUrl('/searchresultId');
};


  
  ngOnInit(): void {
   
  }

}
