import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Login } from 'src/app/Models/login';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @Output() loginOutput:EventEmitter<Login>=new EventEmitter();
 
  constructor(private loginSer:LoginService,private route:Router) { }
  email:string="";
  password:string="";
id:number;
  
  ngOnInit(): void {
  }
  enterNewUser()
  {
    this.route.navigate(["./newUser"])
  }
  conect()
  {
    var login=new Login()
    login.email=this.email;
    login.password=this.password;
    login.id=this.id;
    
    this.loginSer.checkUser(login).subscribe(
      d=>{
        if(d!=null)
        {
          this.loginSer.setName(this.email);
          this.loginSer.setPassword(this.password);
          sessionStorage.setItem("currentPatient", d.toString());
          // sessionStorage.getItem("NewCurrentPatient",d.id)
          this.route.navigate(["./card"]);
         }
         else{
           alert(" User does not exist!")}
        },
      e=>{alert("error!")}
    );
  }

}

  

