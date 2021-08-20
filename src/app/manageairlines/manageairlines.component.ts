import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Manageairlines } from '../models/manageairlines';
import { ManageairlinesService } from '../services/manageairlines.service';
import { ManagebookingsService } from '../services/managebookings.service';

@Component({
  selector: 'app-manageairlines',
  templateUrl: './manageairlines.component.html',
  styleUrls: ['./manageairlines.component.css']
})
export class ManageairlinesComponent implements OnInit {

  // userbookingForm=this.fb.group({
  //   home:['']

  // });
  // airlinelist = new Manageairlines();
  airlinelist:Manageairlines[] = [];
  errormessage:string='';
  id:number=0;
  
  manageairlineFormvalidate= this.fb.group(
    {
      airlinename: ['',[Validators.required]],
      // logoname:['',[Validators.required]],
      flightnumber:['',[Validators.required]],
      contactnumber:['',[Validators.required]],
      contactaddress:['',[Validators.required]],
     
      
    }
  );

  airlineFormvalidate= this.fb.group(
    {
     
      airlinename: ['',[Validators.required]],
      flightnumber:['',[Validators.required]],
      contactnumber:['',[Validators.required]],
      contactaddress:['',[Validators.required]],

      
    }
  );
  isSubmitted: boolean=false;

  constructor(private fb: FormBuilder,private router : Router,
    private manageairlineservice:ManageairlinesService,
    private modalService:NgbModal) { }
  
  manageairlinesForm=this.fb.group({
    admin:['']

  });


  title = 'appBootstrap';
  
  closeResult: string | undefined;
  
  
    
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  handleSubmit(){
    this.isSubmitted = true;
  }

  fc(){
    return this.airlineFormvalidate.controls;
  }
 
  ngOnInit(): void {
    this.fetchAllAirlines();
  }



  fetchAllAirlines(){
    this.manageairlineservice. fetchAirlines().subscribe((res:any)=>{
      console.log(res);
      this.airlinelist = res;
      console.log("after req sent...")
    });   
  }


  fetchairlinebyId(id:number){
    console.log(id)
    this.manageairlineservice.fetchAirlineById(id).subscribe((res:any)=>{
      console.log(res);
      this.fetchAllAirlines();
    })
  }


  addEvent(data: any): void {
  console.log(data);
  this.manageairlineservice.createAirline(data).subscribe(res => {
    console.log(res);
    this.fetchAllAirlines();
  }, (error: { message: string; }) => {
    this.errormessage = error.message;
    console.log(`Error Message::${this.errormessage}`);
  });
}

editEvent(id: number,data: any): void {
  console.log(data);
  this.manageairlineservice.updateAirlinesbyId(id,data).subscribe(res => {
    console.log(res);
    this.fetchAllAirlines();
  }, (error: { message: string; }) => {
    this.errormessage = error.message;
    console.log(`Error Message::${this.errormessage}`);
  });
}


deleteairlines(id:number){
  console.log(id)
  this.manageairlineservice.deleteairlinesbyId(id).subscribe((res:any)=>{
    console.log(res);
    this.fetchAllAirlines();
  })
}


}
