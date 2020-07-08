import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/Models/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

  URL:string="http://localhost:56055/Subscriber";
  email:string;
  password:string;

 
  setName(e){this.email=e}
  setPassword(p){this.password=p}
  setLocalUser(e:string,p:string,fn:string,ln:string)
  {
    this.setName(e);
    this.setPassword(p)
  }
  checkUser(login:Login):Observable<Login>
  {
    return this.http.post<Login>(this.URL+"/login?email="+login.email+"&password="+login.password,login);
  }
 
}
