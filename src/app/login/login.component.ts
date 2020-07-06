import { Component, OnInit } from '@angular/core';
import {  Login } from 'src/app/Models/login';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginSer:LoginService,private route:Router) { }
  email:string="";
  password:string="";
  ngOnInit(): void {
  }
  conect()
  {
    var login=new Login()
    login.email=this.email;
    login.password=this.password;
    this.loginSer.checkUser(login).subscribe(
      d=>{
        if(d!=null)
        {
          this.loginSer.setName(this.email);
          this.loginSer.setPassword(this.password)
         alert("I is comming")
         }
         else{
           alert(" משתמש אינו קיים,נא לחץ על צור משתמש!")
         }
        },
      e=>{alert("error!")}
    );
  }
  newUser()
  {
    var login=new Login();
    login.email=this.email
    login.password=this.password
    //login.roleId=2
    this.loginSer.addUserToDB(login).subscribe(
      myD=>{
        this.loginSer.setLocalUser(this.email,this.password)
       alert(this.loginSer.email+" you added succesfuly!!! please press התחברות")
    },
      myE=>{alert(myE.message)}
    );
  }
}

  

