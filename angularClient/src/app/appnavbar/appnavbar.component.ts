import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-appnavbar',
  templateUrl: './appnavbar.component.html',
  styleUrls: ['./appnavbar.component.css']
})
export class AppnavbarComponent {
  account: string | undefined = undefined;
  ngOnInit(): void {
    this.account = this.authService.getAccount();
  }

  signOut(): void {
    this.authService.removeAccount();
    this.account = this.authService.getAccount();
    this.router.navigate(['signin']);
  }
  constructor(private router: Router, private authService: AuthService){}
}
