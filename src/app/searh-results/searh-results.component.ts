import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searh-results',
  templateUrl: './searh-results.component.html',
  styleUrls: ['./searh-results.component.css']
})
export class SearhResultsComponent implements OnInit {


  constructor(private fb:FormBuilder,private router : Router) { }

 searchresultsForm=this.fb.group({
    searchresultId:['']
  });


  btnClick() {
    this.router.navigateByUrl('/ticketbookingId');
};

btnClickBack(){
  this.router.navigateByUrl('/home');
}
  

  ngOnInit(): void {
  }

}
