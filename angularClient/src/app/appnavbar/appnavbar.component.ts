import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-appnavbar',
  templateUrl: './appnavbar.component.html',
  styleUrls: ['./appnavbar.component.css']
})
export class AppnavbarComponent {
  account: string | undefined = undefined;
  shouldRun: boolean = true;
  ngOnInit(): void {
    this.account = this.authService.getAccount();
  }

  signOut(): void {
    this.authService.removeAccount();
    this.account = this.authService.getAccount();
    this.router.navigate(['signin']);
  }

  events: string[] = [];
  opened: boolean = false;

  @ViewChild('drawer', { static: false }) drawer!: MatDrawer;
  
  toggleSideNav(): void {
    this.drawer.toggle();
  }

  constructor(private router: Router, private authService: AuthService){}
}
