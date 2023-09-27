import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localSaveAccount(email: string, password: string){
    if(email == null){
      return localStorage.clear();
    }
    localStorage.setItem('auth', JSON.stringify({account: email}));
  }
  getAccount(): string | undefined {
    let r = localStorage.getItem('auth');
    if(!r){
      return;
    }
    return JSON.parse(r).account;
  }
  removeAccount(){
    return localStorage.clear();
  }
  isLoggedIn(){
    console.log('IsLoggedIn: ' + this.getAccount() != undefined)
    return this.getAccount() != undefined;
  }

  signin(email: string, password: string): Observable<void> {
    this.localSaveAccount(email, password);
    return of();
  }

  constructor() { }
}
