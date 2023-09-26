import { NgModule, inject } from '@angular/core';
import { CanActivateFn, RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { AuthService } from './auth/auth.service';


const routes: Routes = [
  {path:'', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate:[() => inject(AuthService).isLoggedIn()] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
