import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-book',
  templateUrl: './user-book.component.html',
  styleUrls: ['./user-book.component.css']
})
export class UserBookComponent implements OnInit {
  userbookingFormvalidate= this.fb.group(
    {
      originId: ['',[Validators.required]],
      destinationId:['',[Validators.required]],
      passengersId:['',[Validators.required]],
      fromdateId:['',[Validators.required]],
      returndateId:['',[Validators.required]]
    }
  );
 

 isSubmitted: boolean= false;
  constructor(private fb: FormBuilder,private router : Router) { }

  userbookingForm=this.fb.group({
    home:['']

  });


  handleSubmit(){
    this.isSubmitted = true;
  }

  fc(){
    return this.userbookingFormvalidate.controls;
  }



  btnClick() {
    this.router.navigateByUrl('/searchresultId');
};

  

  ngOnInit(): void {
    
  }

}
