import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BackendProperties} from '../BackendProperties';

@Injectable({
  providedIn: 'root'
})
export class ObjectFetchingService {

  private backendProperties:BackendProperties;

  constructor(private httpClient: HttpClient) {
    this.backendProperties = new BackendProperties();
  }

  getAllObjects(): any {
    let response: any;

    this.httpClient
      .get(this.backendProperties.getAllObjectsUrl())
      .subscribe(response => console.log(response));
  }
}
