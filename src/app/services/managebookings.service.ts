import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagebookingsService {
  url = "http://localhost:3000/managebookinglist";

  constructor(private httpClient:HttpClient) { }

  fetchmanagebookings(){
    console.log("fetching all fights...")
    return this.httpClient.get(this.url);
}
fetchbookingsbyId(id:number){
    return this.httpClient.get(this.url+"/"+id);
}
}
