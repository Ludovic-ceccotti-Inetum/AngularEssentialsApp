import { Injectable } from '@angular/core';
import {BackendProperties} from '../../../models/BackendProperties';
import {HttpClient} from '@angular/common/http';
import {LanguageResponse} from '../../../models/backend/languages/LanguageResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageFetchingService {

  private backendProperties: BackendProperties;

  constructor(private httpClient: HttpClient) {
    this.backendProperties = new BackendProperties();
  }

  getAllAvailableLanguages(): Observable<LanguageResponse> {
    return this.httpClient.get<LanguageResponse>(this.backendProperties.getLanguagesAvailableUrl());
  }

}
