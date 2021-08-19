import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageschedule',
  templateUrl: './manageschedule.component.html',
  styleUrls: ['./manageschedule.component.css']
})
export class ManagescheduleComponent implements OnInit {
  scheduleFormvalidate= this.fb.group(
    {
      selectairline: ['',[Validators.required]],
      flightnumber:['',[Validators.required]],
     
    }
  );
  isSubmitted: boolean=false;

  constructor(private fb: FormBuilder,private router : Router) { }
  scheduleForm=this.fb.group({
    scheduleId:['']

  });

  handleSubmit(){
    this.isSubmitted = true;
  }

  fc(){
    return this.scheduleFormvalidate.controls;
  }

//   btnClick() {
//     this.router.navigateByUrl('/home');
// };


  ngOnInit(): void {
  }

}
