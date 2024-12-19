import { Injectable } from '@angular/core';
import {BackendProperties} from '../BackendProperties';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SignupRequest} from '../../../models/backend/signup/SignupRequest';
import {Observable} from 'rxjs';
import {SignupResponse} from '../../../models/backend/signup/SignupResponse';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private backendProperties: BackendProperties;

  constructor(private httpClient: HttpClient) {
    this.backendProperties = new BackendProperties();
  }

  signup(payload: SignupRequest): Observable<SignupResponse | null> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');

    return this.httpClient.post<SignupResponse>(this.backendProperties.getSignupUrl(),payload,{headers:headers})
  }
}
