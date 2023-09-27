import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  ngOnInit(): void {
  }

  data: string = "";
  getData(): void {
    this.http.get<any>('/api')
      .pipe(
        tap(x => {
          this.data = JSON.stringify(x);
        }),
      ).subscribe();
  }

  constructor(private router: Router, private authService: AuthService, private http: HttpClient){}
}
