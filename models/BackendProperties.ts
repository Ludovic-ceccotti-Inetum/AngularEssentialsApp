export class BackendProperties {

  private _BASE_URL: string = "http://localhost:8080";

  private _CHAMPIONS_ENDPOINT: string = "/champions"

  private _OBJECTS_ENDPOINT: string = '/objects'

  private _AVAILABLE_LANGUAGES_ENDPOINT: string = '/languages/available';

  private _RIOT_HEADER: string = 'X-Riot-Token'

  private _RIOT_TOKEN: string = 'RGAPI-bba8af16-a395-4540-9ee9-de348f5e930b';

  constructor() {}


  get BASE_URL(): string {
    return this._BASE_URL;
  }

  get CHAMPIONS_ENDPOINT(): string {
    return this._CHAMPIONS_ENDPOINT;
  }

  get RIOT_HEADER(): string {
    return this._RIOT_HEADER;
  }

  get RIOT_TOKEN(): string {
    return this._RIOT_TOKEN;
  }


  get OBJECTS_ENDPOINT(): string {
    return this._OBJECTS_ENDPOINT;
  }


  get AVAILABLE_LANGUAGES_ENDPOINT(): string {
    return this._AVAILABLE_LANGUAGES_ENDPOINT;
  }

  getLanguagesAvailableUrl() {
    return `${this.BASE_URL.concat(this._AVAILABLE_LANGUAGES_ENDPOINT)}`;
  }

  getAllObjectsUrl():string {
    return `${this.BASE_URL.concat(this._OBJECTS_ENDPOINT)}`;
  }

  getAllChampionsUrl(): string {
    return `${this.BASE_URL.concat(this.CHAMPIONS_ENDPOINT)}`
  }

  getChampionByNameUrl(name: string) : string {
  return (`${this._BASE_URL.concat(this._CHAMPIONS_ENDPOINT)}/${name}`);
}

}
