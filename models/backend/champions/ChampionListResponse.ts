import {ChampionResponse} from './ChampionResponse';

export interface ChampionListResponse {
  type: string;
  format: string;
  version: string;
  data: Map<string,ChampionResponse>
}
