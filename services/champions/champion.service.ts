import { Injectable } from '@angular/core';
import {ChampionResponse} from '../../models/backend/champions/ChampionResponse';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor() { }

 /* groupedChampionsByFirstLetter(champions: ChampionResponse[]): Map<string, ChampionResponse[]> {
    const championsByLetterMap = new Map<string, ChampionResponse[]>;
    champions.forEach(champion => {
      const firstletter = champion.name.toLowerCase().charAt(0);
      if(!championsByLetterMap.has(firstletter)) {
        championsByLetterMap.set(firstletter, [champion])
      } else {
        if (championsByLetterMap.get(firstletter) !== undefined) {
          // @ts-ignore
          championsByLetterMap.get(firstletter).push(champion);
        }
      }
    });
    return championsByLetterMap;
  }*/

  groupedChampionsByFirstLetter(champions: ChampionResponse[], map : Map<string, ChampionResponse[]>): void{
    champions.forEach(champion => {
      const firstletter = champion.name.toLowerCase().charAt(0);
      if(!map.has(firstletter)) {
        map.set(firstletter, [champion])
      } else {
        if (map.get(firstletter) !== undefined) {
          // @ts-ignore
          championsByLetterMap.get(firstletter).push(champion);
        }
      }
    });
  }
}
