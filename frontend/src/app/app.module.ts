import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignupComponent } from './signup/signup.component';
import{ FormsModule, ReactiveFormsModule  } from'@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { AddVideoComponent } from './add-video/add-video.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import { ManageVideoComponent } from './manage-video/manage-video.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignupComponent,
    AddVideoComponent,
    ViewVideoComponent,
    ManageVideoComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
