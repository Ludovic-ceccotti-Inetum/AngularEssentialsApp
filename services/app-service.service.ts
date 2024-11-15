import {inject, Injectable} from '@angular/core';
import { Component } from '@angular/core';
import {Champion} from '../models/Champion';
import {Position} from '../models/Position';
import {ChampionType} from '../models/ChampionType';
import {FetchingServiceService} from './fetching-service.service';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private fetchingService = inject(FetchingServiceService);

  private BEGINNER_CHAMPS: Champion[] = [
    new Champion('Malphite',ChampionType.TANK, [Position.TOP,Position.MID]),
    new Champion('Rengar',ChampionType.JUNGLER, [Position.JUNGLE]),
    new Champion('Leona',ChampionType.SUPPORT, [Position.BOTTOM]),
    new Champion('Jinx',ChampionType.ADC, [Position.BOTTOM]),
    new Champion('Tryndamer', ChampionType.BRUISER, [Position.TOP,Position.JUNGLE]),
  ];

  private CHAMPS_OF_THE_WEEK: Champion [] = [
    new Champion('Maokai',ChampionType.TANK, [Position.JUNGLE,Position.TOP,Position.BOTTOM]),
    new Champion('Kha Zhix',ChampionType.JUNGLER, [Position.JUNGLE]),
    new Champion('Leona',ChampionType.SUPPORT, [Position.BOTTOM]),
    new Champion('Ashe',ChampionType.ADC, [Position.BOTTOM]),
    new Champion('Riven', ChampionType.BRUISER, [Position.TOP,Position.JUNGLE])
  ];

  filterChampionsByName(champions: Champion[], name : String): Champion[] {
    if(name.length === 0) return champions;
   return champions.filter(champion => champion.name.toLowerCase() === name.toLowerCase());
  }

  toggleBeginner(isBeginner:boolean): boolean {
    return !isBeginner
  }

  loadChampions(isBeginner: boolean): Champion[] {
    return isBeginner ? this.BEGINNER_CHAMPS : this.CHAMPS_OF_THE_WEEK;
  }

  constructor() {
    console.log(this.fetchingService.fetchHeroesOfTheWeek());
  }
}
