import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BackendProperties} from '../BackendProperties';
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

  /**
   * No body is required
   * @param name
   * @param skinId
   * @param owned
   */
  updateOwnedChampionSkin(name: string, skinId: number, owned: boolean) {
    return this.httpClient.patch(this.backendProperties.OWNED_SKIN_ENDPOINT.concat(`/${name}/${skinId}?owned=${owned}`),{});
  }
}
