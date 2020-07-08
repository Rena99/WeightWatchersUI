import { Component, OnInit, Input } from '@angular/core';
import {   NewUser} from 'src/app/Models/newUser';
import { NewUserService } from 'src/app/Services/new-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  
  // @Input("my-newUser") newUserInput:NewUser;

  constructor(private loginSer:NewUserService,private route:Router) { }
  email:string="";
  password:string="";
  lastName:string="";
  firstName:string="";
  height:number=0;
  weight:number=0;
  mbi:number=0;

  ngOnInit(): void {
  }
  newUser()
  {
    var newUser=new NewUser();
    newUser.email=this.email;
    newUser.password=this.password;
    newUser.firstName=this.firstName;
    newUser.lastName=this.lastName;
    newUser.height=this.height;
    newUser.weight=this.weight; 

    this.loginSer.addUserToDB(newUser).subscribe(
      myD=>{
        this.loginSer.setLocalUser(this.email,this.password,this.firstName,this.lastName,this.height,this.weight);
       alert(this.loginSer.email+" you added succesfuly!!! please press conect");
      //  sessionStorage.setItem("NewCurrentPatient", myD.email);
       this.route.navigate(["./card"])
    },
      myE=>{alert(myE.message)}
    );
  }
}
