import {ChampionInfo} from './ChampionInfo';
import {ChampionStats} from './ChampionStats';
import {ChampionSkin} from './ChampionSkin';

export interface ChampionResponse {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  lore: string;
  info: ChampionInfo;
  stats: ChampionStats;
  skins: ChampionSkin [];
  tags: string [];
  allytips: string [];
  enemytips: string [];
  partype: string;
  possessed:boolean;
}
