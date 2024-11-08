import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchingServiceService {
private RIOT_HEADER: String = 'X-Riot-Token'
private RIOT_TOKEN: String = 'RGAPI-bba8af16-a395-4540-9ee9-de348f5e930b';
  constructor() { }

  fetchHeroesOfTheWeek() {
    let champIds =
    HttpClient.('/api/config', {
      headers: {
        'X-Riot-Token': this.RIOT_TOKEN,
      }
    }).subscribe(config => {
      // ...
    });
  }
}
