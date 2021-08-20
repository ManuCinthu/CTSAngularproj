import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Managebooking } from '../models/managebooking';
import { ManagebookingsService } from '../services/managebookings.service';



@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.css']
})
export class ManageBookingComponent implements OnInit {


  managebooking:Managebooking[]=[];
  constructor(private fb:FormBuilder,private managebookingservice:ManagebookingsService) { }

 managebookingForm=this.fb.group({
    managebookingId:['']
  });

  ngOnInit(): void {
    this.fetchAllmanagebookings()
  }


  fetchAllmanagebookings(){
    this.managebookingservice.fetchmanagebookings().subscribe((res:any)=>{
      console.log(res);
      this.managebooking = res;
      console.log("after req sent...")
    });   
  }


  // fetchfightsbyId(id:number){
  //   console.log(id)
  //   this.managebookingservice.fetchbookingsbyId(id).subscribe((res:any)=>{
  //     console.log(res);
  //     this.fetchAllmanagebookings();
  //   })
  // }


  // addTodo(){
  //   let todo:Todo = new Todo(false, 0, "Read angule", 5);

  //   this.todoSevice.createTodo(todo).subscribe((res:any)=>{
  //     console.log(res);

  //     this.fetchAll();
  //   })
  // }
  

  

  cancelbookings(id:number){
    console.log(id)
    this.managebookingservice.deletebookings(id).subscribe((res:any)=>{
      console.log(res);
      this.fetchAllmanagebookings();
    })
  }


}
