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

  msg = '';
  username = '';
  password = 'login123!'

  loginbookingvalidateForm = this.fb.group(
    {
      usernameId: ['', [Validators.required]],
      passwordId: ['', [Validators.required]],

    }
  );
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private _service: RegistrationService) { }
  loginForm = this.fb.group({
    loginId: ['']
  });

  handleSubmit() {
    this.isSubmitted = true;
  }

  fc() {
    return this.loginbookingvalidateForm.controls;
  }

  registerationform() {
    this.router.navigateByUrl('/register');
  };



  handleLoginClick() {
    if (this.username && this.password) {
      this.authenticateUser(this.username);
    } else {
      alert('enter username and password')
    }
  }

  authenticateUser(username: string) {
    sessionStorage.setItem('user', username);
    if (username == "admin") {
      this.router.navigate(['/admin']);

    }

    else this.router.navigate(['/home'])
  }


  ngOnInit(): void {
  }

}
