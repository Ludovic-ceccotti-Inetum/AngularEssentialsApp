import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BackendProperties} from '../../../models/BackendProperties';

@Injectable({
  providedIn: 'root'
})
export class ChampionFetchingService {

  private backendProperties: BackendProperties;

  constructor(private httpClient: HttpClient) {
    this.backendProperties = new BackendProperties();
  }

  getAllChampions(): any {
    let response: any;

    this.httpClient
      .get(this.backendProperties.getAllChampionsUrl())
      .subscribe(response => console.log(response));
  }
}
