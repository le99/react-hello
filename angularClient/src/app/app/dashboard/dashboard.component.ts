import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  account: string | undefined = undefined;
  ngOnInit(): void {
    this.account = this.authService.getAccount();
  }

  signOut(): void {
    console.log('sign out');
    this.authService.removeAccount();
    this.account = this.authService.getAccount();
    this.router.navigate(['signin']);
  }
  constructor(private router: Router, private authService: AuthService){}
}
