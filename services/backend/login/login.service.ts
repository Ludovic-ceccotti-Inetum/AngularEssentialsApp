import {Injectable} from '@angular/core';
import {BackendProperties} from '../../../models/BackendProperties';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginRequest} from '../../../models/backend/login/LoginRequest';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import {Observable} from 'rxjs';
import {LoginResponse} from '../../../models/backend/login/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private backendProperties: BackendProperties;

  constructor(private httpClient: HttpClient) {
    this.backendProperties = new BackendProperties();
  }

   login(payload: LoginRequest): Observable<LoginResponse | null> {
    let token: LoginResponse | null = null;
    const basicAuthHeaders = new HttpHeaders()
      .append('Authorization', 'Basic ' + btoa(payload.userName + ':' + payload.password))
      .append('Content-Type', 'application/json');
  return  this.httpClient
      .post<LoginResponse>(this.backendProperties.getLoginUrl(), null, {headers: basicAuthHeaders})
  }
}
