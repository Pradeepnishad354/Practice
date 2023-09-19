import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {


   }


// add user

createUser(user:User):Observable<Object>{

  return this.http.post(`${baseURL}/user/`,user)
}

//get user
public getUser(id:any){


  return this.http.get(`${baseURL}/user/get/${id}`)
}

// update user

public updateUser(user:any){

  return this.http.put(`${baseURL}/update/user/`,user)
}
}
