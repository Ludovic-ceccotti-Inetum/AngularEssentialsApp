import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ChampionResponse} from '../../../../../models/backend/champions/ChampionResponse';
import {ChampionFetchingService} from '../../../../../services/backend/champions/champion-fetching.service';
import {NgOptimizedImage} from '@angular/common';
import {TextInfoComponent} from '../../../text-info/text-info.component';
import {TagsWithIconComponent} from '../../../tags-with-icon/tags-with-icon.component';
import { ChampionSkinsComponent } from '../../../champion-skins/champion-skins.component';

@Component({
    selector: 'app-champion-info',
    imports: [
        NgOptimizedImage, TextInfoComponent, TagsWithIconComponent, ChampionSkinsComponent
    ],
    templateUrl: './champion-info.component.html',
    styleUrl: './champion-info.component.css'
})
export class ChampionInfoComponent implements OnInit {

  private championFecthingService: ChampionFetchingService;
  champion: ChampionResponse | undefined;
  championPic: string = '';
  iconColor: string = '';

  constructor(private route: ActivatedRoute, championFecthingService: ChampionFetchingService) {
    this.championFecthingService = championFecthingService;
  }

  @Input()
  set name(name: string) {
    this.championFecthingService.getChampionByName(name).subscribe({
      next: (res) => {
        if (res !== null) {
          this.champion = res;
          //TODO transform url with champions with ' in the name
          this.championPic = this.champion?.skins[0]?.skinURI.toString();
        }
      },
      error: (err) => console.error(err)
    })
  }

  ngOnInit() {
  }

  matchIconColorWithFirstTag(tag: string) {
    switch (tag) {
      case ('Mage'):
        return '#0546ff'

      case ('Fighter'):
        return '#f11653';
      case ('Assassin') :
        return '#fa2c05';
      case ('Marksman'):
        return '#8001c6';
      case ('Tank') :
        return '#2fa242';
      case ('Support'):
        return '#f637e3';
      default:
        return '#74C0FC';

    }
  }

}
