import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListflightsService {
  url = "http://localhost:3000/list";

  constructor(private httpClient:HttpClient) { }
  fetchFlights(){
    console.log("fetching all fights...")
    return this.httpClient.get(this.url);
}
fetchFlightsById(id:number){
    return this.httpClient.get(this.url+"/"+id);
}

// createFlight(todo:any){
//     return this.httpClient.post(this.url, todo);
// }


// updateFlight(id:number, todo:any){
//     return this.httpClient.put(this.url+"/"+id, todo);
// }


// removeFlight(id:number){
//     return this.httpClient.delete(this.url+"/"+id);
// }



}
