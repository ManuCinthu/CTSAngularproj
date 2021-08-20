import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageairlinesService {
  url = "http://localhost:3000/airlinelist";

  constructor(private httpClient:HttpClient) { }
  fetchAirlines(){
    console.log("fetching all airlines...")
    return this.httpClient.get(this.url);
}
fetchAirlineById(id:number){
    return this.httpClient.get(this.url+"/"+id);
}

createAirline(airlines:any){
    return this.httpClient.post(this.url, airlines);
}

// getData(): Observable<Data[]> {
//   let url = "https://jsonplaceholder.typicode.com/todos/";
//   return this.http.get<Data[]>(url);
// }

updateAirlinesbyId(id:number, airlines:any){
    return this.httpClient.put(this.url+"/"+id, airlines);
}


deleteairlinesbyId(id:number){
    return this.httpClient.delete(this.url+"/"+id);
}

}
