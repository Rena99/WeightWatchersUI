import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from 'src/app/Models/newUser';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {
  constructor(public http:HttpClient) { }

  URL:string="http://localhost:56055/Subscriber";
  email:string;
  password:string;
  firstName:string;
  lastName:string;
  height:number;
  weight:number;
  
 
  setName(e){this.email=e}
  setPassword(p){this.password=p}
  setfirstName(fn){this.firstName=fn}
  setlastName(ln){this.lastName=ln}
  setWeight(w){this.weight=w}
  setHeight(h){this.height=h}
  
  setLocalUser(e:string,p:string,fn:string,ln:string,h:number,w:number){
    this.setName(e);
    this.setPassword(p);
    this.setfirstName(fn);
    this.setlastName(ln);
    this.setWeight(w);
    this.setHeight(h)
  }

  addUserToDB(newUser:NewUser):Observable<NewUser>
  {
 const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  }
    const requestBody = JSON.stringify(newUser);
    return this.http.post<NewUser>(this.URL+"/",requestBody,httpOptions);
  }
}
