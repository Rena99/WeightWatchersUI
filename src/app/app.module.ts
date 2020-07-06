import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from './card/card.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
/////////////////////////////////////////////////////////////////////
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';
import {MatRippleModule, MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from "@angular/material/form-field"
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
//import {MatInputModule, MatMenuModule} from '@angular/material';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCheckboxModule, FormsModule
    ,
   // MatInputModule, MatMenuModule,
    MatDialogModule,MatTableModule,MatFormFieldModule
    ,MatTabsModule,MatSelectModule,MatSnackBarModule,MatDatepickerModule,
    MatNativeDateModule,MatRippleModule,MatTreeModule,MatIconModule,MatProgressBarModule,
    FormsModule,
  // RouterModule.forRoot(appRoute)
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
