import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import { CardComponent } from './card.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [CardComponent],
  imports: [
    RouterModule.forChild([
      {path:'card', component: CardComponent},
      {path: '', redirectTo: 'card', pathMatch: 'full'},

    ]),
    CommonModule,
    MaterialModule,
    MatCardModule
  ]
})
export class CardModule { }
