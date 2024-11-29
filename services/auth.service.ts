import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

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
