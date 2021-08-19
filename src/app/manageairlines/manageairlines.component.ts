import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageairlines',
  templateUrl: './manageairlines.component.html',
  styleUrls: ['./manageairlines.component.css']
})
export class ManageairlinesComponent implements OnInit {
  airlineFormvalidate= this.fb.group(
    {
      airlinename: ['',[Validators.required]],
      logoname:['',[Validators.required]],
      contactnumber:['',[Validators.required]],
      address:['',[Validators.required]],
      
    }
  );
  isSubmitted: boolean=false;

  constructor(private fb: FormBuilder,private router : Router) { }
  airlineForm=this.fb.group({
    admin:['']

  });


  handleSubmit(){
    this.isSubmitted = true;
  }

  fc(){
    return this.airlineFormvalidate.controls;
  }

  btnClick() {
    this.router.navigateByUrl('/home');
};

  ngOnInit(): void {
  }

}
