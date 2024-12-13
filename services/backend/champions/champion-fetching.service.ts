import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BackendProperties} from '../../../models/BackendProperties';
import {Observable} from 'rxjs';
import {ChampionListResponse} from '../../../models/backend/champions/ChampionListResponse';
import {ChampionResponse} from '../../../models/backend/champions/ChampionResponse';

@Injectable({
  providedIn: 'root'
})
export class ChampionFetchingService {

  private backendProperties: BackendProperties;

  constructor(private httpClient: HttpClient) {
    this.backendProperties = new BackendProperties();
  }

  getAllChampions(): Observable<ChampionListResponse | null> {
  return this.httpClient
      .get<ChampionListResponse | null>(this.backendProperties.getAllChampionsUrl());
  }

  getChampionByName(name: string): Observable<ChampionResponse | null> {
    return this.httpClient
      .get<ChampionResponse | null>(this.backendProperties.getChampionByNameUrl(name));
  }
}
