import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  public loginuser(user:User):Observable<any>{
    if(user.name!="user")
    return this._http.post<any>("http://localhost/login",user)
    else
    return this._http.post<any>("http://localhost/login",user)

    
  }
}
