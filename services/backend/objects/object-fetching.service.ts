import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BackendProperties} from '../BackendProperties';
import {ObjectListResponse} from '../../../models/backend/objects/ObjectListResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectFetchingService {

  private backendProperties:BackendProperties;

  private testPath: string = './objects.json';

  constructor(private httpClient: HttpClient) {
    this.backendProperties = new BackendProperties();
  }

 getAllObjects(): Observable<ObjectListResponse | null> {

   return this.httpClient
     .get<ObjectListResponse | null>(this.backendProperties.getAllObjectsUrl());
 }

  /**
   * Read objects from json for local development
   */
 getLocalObjects(): Observable<ObjectListResponse | null> {

   return this.httpClient
     .get<ObjectListResponse | null>(this.testPath);
 }

}
