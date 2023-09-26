import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  applyForm = new FormGroup({
    email: new FormControl('a@a.com'),
    password: new FormControl('1234'),
  });

  submitApplication() {
    if(!this.applyForm.value.email || !this.applyForm.value.password){
      return;
    }
    this.authService.signin(this.applyForm.value.email, this.applyForm.value.password)
    this.router.navigate(['dashboard']);
  }


  constructor(private router: Router, private authService: AuthService){}
}
