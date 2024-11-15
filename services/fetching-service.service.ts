import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchingServiceService {
private RIOT_HEADER: String = 'X-Riot-Token'
private RIOT_TOKEN: String = 'RGAPI-bba8af16-a395-4540-9ee9-de348f5e930b';
private CHAMPIONS_ROTATION_URL = 'https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations';
  constructor(private http: HttpClient) { }

  fetchHeroesOfTheWeek(): any  {
    let responseBody: any;
    try {
      this.http.get(this.CHAMPIONS_ROTATION_URL, {
        headers: {
          'X-Debug-Level': this.CHAMPIONS_ROTATION_URL,
        }
      }).subscribe(response => {
        responseBody = response;
      });
      return responseBody;
    } catch (e) {
      console.log(e)
    }
  }
}
