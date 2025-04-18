import {Injectable} from '@angular/core';
import {BackendProperties} from '../BackendProperties';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginRequest} from '../../../models/backend/login/LoginRequest';
import {Observable} from 'rxjs';
import {LoginResponse} from '../../../models/backend/login/LoginResponse';
import {ChangePasswordRequest} from '../../../models/backend/login/ChangePasswordRequest';

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

  logout(): Observable<number | null> {
    const basicAuthHeaders = new HttpHeaders().append('Content-Type', 'application/json');
    return this.httpClient.post<number>(this.backendProperties.getLogoutUrl(),null,{headers: basicAuthHeaders});
  }

  askResetPassword(username: string | null): Observable<number | null> {
    const basicAuthHeaders = new HttpHeaders().append('Content-Type', 'application/json');
    return this.httpClient.post<number>(this.backendProperties.getAskResetPasswordUrl(),{username: username},{headers: basicAuthHeaders});
  }

  doResetPassword(payload: ChangePasswordRequest | null):Observable<boolean> {
    const basicAuthHeaders = new HttpHeaders().append('Content-Type', 'application/json');
    return this.httpClient.patch<boolean>(this.backendProperties.getAskResetPasswordUrl(), payload, {headers: basicAuthHeaders})
  }

}
