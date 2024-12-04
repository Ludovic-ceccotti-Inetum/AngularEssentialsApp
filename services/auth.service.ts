import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from './backend/login/login.service';
import {LoginRequest} from '../models/backend/LoginRequest';
import {LoginResponse} from '../models/backend/LoginResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginService: LoginService;

  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

 createTokenFromLogin(payload: LoginRequest):Observable<LoginResponse | null> {
  return this.loginService.login(payload);
}

  getBasicCredentialsFromStorage(): string | null{
    let username: string;
    let password: string;
    console.log('Looking credentials for basic auth from SessionStorage first');

    if(sessionStorage.getItem('username') && sessionStorage.getItem('password')) {

      username = <string>sessionStorage.getItem('username');
      password = <string>sessionStorage.getItem('password');
      return username + ':' + password;
    } else if(localStorage.getItem('username') && localStorage.getItem('password')) {

      console.log('No credentials found in session storage, looking in local storage');

      username = <string>localStorage.getItem('username');
      password = <string>localStorage.getItem('password');
      return username + ':' + password;
    } else {
      console.error('No credentials found. cannot authenticate');
      return null;
    }
  }
}
