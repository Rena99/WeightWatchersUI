import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { NewUserComponent } from './Component/new-user/new-user.component';
import { CardComponent } from './Component/card/card.component';


const routes: Routes = [ 
  {path: '', redirectTo: 'Login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'newUser', component: NewUserComponent},
  {path:'card', component: CardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
