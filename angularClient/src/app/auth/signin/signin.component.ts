import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



import {MatGridListModule} from '@angular/material/grid-list';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent{  
  applyForm = new FormGroup({
    email: new FormControl('a@a.com'),
    password: new FormControl('1234'),
  });

  submitApplication() {
    console.log(this.applyForm.value)
    if(!this.applyForm.value.email || !this.applyForm.value.password){
      return;
    }
    this.authService.signin(this.applyForm.value.email, this.applyForm.value.password)
    this.router.navigate(['dashboard']);
  }


  constructor(private router: Router, private authService: AuthService){}
  
}
