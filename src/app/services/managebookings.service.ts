import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagebookingsService {
  url = "http://localhost:3000/managebooking";

  constructor(private httpClient: HttpClient) { }

  fetchmanagebookings() {
    console.log("fetching all fights...")
    return this.httpClient.get(this.url);
  }
  fetchbookingsbyId(id: number) {
    return this.httpClient.get(this.url + "/" + id);
  }

  createbookings(todo: any) {
    return this.httpClient.post(this.url, todo);
  }
  updatebookings(id: number, todo: any) {
    return this.httpClient.put(this.url + "/" + id, todo);
  }
  deletebookings(id: number) {
    return this.httpClient.delete(this.url + "/" + id);
  }


}
