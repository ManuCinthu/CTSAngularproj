import { UnaryOperator } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-loginmodule',
  templateUrl: './loginmodule.component.html',
  styleUrls: ['./loginmodule.component.css']
})
export class LoginmoduleComponent implements OnInit {
  user = new User();
  msg='';
  loginbookingvalidateForm= this.fb.group(
    {
      usernameId: ['',[Validators.required]],
      passwordId:['',[Validators.required]],
      
    }
  );
  isSubmitted: boolean=false;

  constructor(private fb:FormBuilder, private router:Router,private _service:RegistrationService) { }
  loginForm=this.fb.group({
    loginId:['']
  });

  handleSubmit(){
    this.isSubmitted = true;
  }

  fc(){
    return this.loginbookingvalidateForm.controls;
  }

  registerationform() {
    this.router.navigateByUrl('/register');
};


homescreen()
{
  this.router.navigateByUrl('/home');
};

adminscreen(){
  this.router.navigateByUrl('/admin')
}

loginUser(){
  this._service.loginuser(this.user).subscribe(
    data => {
      console.log("response received");
      this.router.navigateByUrl('/home');
  
  },
    error => {
      console.log("exception occured");
     this.msg="Badcredentials";

    }
  )
}

  ngOnInit(): void {
  }

}
