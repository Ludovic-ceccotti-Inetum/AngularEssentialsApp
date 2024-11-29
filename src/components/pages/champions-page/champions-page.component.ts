import { Component } from '@angular/core';
import {ChampionFetchingService} from '../../../../services/backend/champions/champion-fetching.service';

@Component({
  selector: 'app-champions-page',
  standalone: true,
  imports: [],
  templateUrl: './champions-page.component.html',
  styleUrl: './champions-page.component.css'
})
export class ChampionsPageComponent {

  private championFetchingService: ChampionFetchingService;


  constructor(championFetchingService: ChampionFetchingService) {
    this.championFetchingService = championFetchingService;
    this.championFetchingService.getAllChampions();
  }
}
