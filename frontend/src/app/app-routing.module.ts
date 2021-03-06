import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './add-video/add-video.component';
import {LogInComponent  } from './log-in/log-in.component';
import { ManageVideoComponent } from './manage-video/manage-video.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'login', component:LogInComponent},
  { path: 'register', component: SignupComponent },
  { path: 'addvideo', component:  AddVideoComponent},
  { path: 'managevideo', component:  ManageVideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
