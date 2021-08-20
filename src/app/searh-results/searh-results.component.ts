import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Listflights } from '../models/listflights';
import { ListflightsService } from '../services/listflights.service';

@Component({
  selector: 'app-searh-results',
  templateUrl: './searh-results.component.html',
  styleUrls: ['./searh-results.component.css']
})
export class SearhResultsComponent implements OnInit {

  flightlist:Listflights[] = [];
  // fetchAll: any;
  constructor(private fb: FormBuilder, private router: Router,private listflightservice:ListflightsService) { }

  
  searchresultsForm = this.fb.group({
    searchresultId: ['']
  });


  btnClick() {
    this.router.navigateByUrl('/ticketbookingId');
  };

  btnClickBack() {
    this.router.navigateByUrl('/home');
  }


  ngOnInit(): void {
     this.fetchAllFlights();
  }


  fetchAllFlights(){
    this.listflightservice.fetchFlights().subscribe((res:any)=>{
      console.log(res);
      this.flightlist = res;
      console.log("after req sent...")
    });   
  }


  fetchfightsbyId(id:number){
    console.log(id)
    this.listflightservice.fetchFlightsById(id).subscribe((res:any)=>{
      console.log(res);
      this.fetchAllFlights();
    })
  }

}
