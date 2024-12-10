import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {ChampionResponse} from '../../../../../models/backend/champions/ChampionResponse';
import {ChampionFetchingService} from '../../../../../services/backend/champions/champion-fetching.service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-champion-info',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './champion-info.component.html',
  styleUrl: './champion-info.component.css'
})
export class ChampionInfoComponent implements OnInit{

  private championFecthingService: ChampionFetchingService;
  champion: ChampionResponse | undefined;
  championPic: string = '';

  constructor(private route: ActivatedRoute, championFecthingService: ChampionFetchingService) {
    this.championFecthingService = championFecthingService;
  }

  @Input()
  set name(name: string) {
    this.championFecthingService.getChampionByNames(name).subscribe({
      next:(res) => {
        if(res !== null) {
          this.champion = res;
          //TODO transform url with champions with ' in the name
          this.championPic = this.champion?.skins[0]?.skinURI.toString();
        }
    },
    error:(err) => console.error(err)
    })
  }

  ngOnInit() {
  }

}
