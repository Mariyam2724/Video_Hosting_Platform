import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent  } from './log-in/log-in.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'login', component:LogInComponent},
  { path: 'register', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
