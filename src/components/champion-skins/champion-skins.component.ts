import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ChampionSkin} from '../../../models/backend/champions/ChampionSkin';
import {MatTooltip} from '@angular/material/tooltip';
import {ChampionFetchingService} from '../../../services/backend/champions/champion-fetching.service';

@Component({
    selector: 'app-champion-skins',
  imports: [
    NgOptimizedImage,
    MatTooltip
  ],
    templateUrl: './champion-skins.component.html',
    styleUrl: './champion-skins.component.css'
})
export class ChampionSkinsComponent {
  @Input() skins: ChampionSkin[] = [];
  @Input() champion: string = '';
  activeSkin: number = 0;
  ownedSkinPlaceholder: string = "You own this skin in your collection";
  checkSkinPlaceholder: string = "Mark skin as owned";

  private champioFetchingService: ChampionFetchingService;

  //swipeUtilsService: SwippeUtilsService;


  constructor(champioFetchingService: ChampionFetchingService) {
    this.champioFetchingService = champioFetchingService;
  }

  goToNextSkin():void {
    if(this.activeSkin < this.skins.length -1) this.activeSkin++;
  }

  gotToPrevSkin(): void {
    if(this.activeSkin > 0) this.activeSkin--;
  }

  startX: number = 0;
  startY: number = 0;
  dist: number = 0;
  threshold: number = 70; // distance minimale pour être considéré comme un swipe
  allowedTime: number = 200; // temps maximum pour effectuer le swipe
  elapsedTime: number = 0;
  startTime: number = 0;

  onTouchStart(e: TouchEvent) {
    let touchobj = e.changedTouches[0];
    this.dist = 0;
    this.startX = touchobj.pageX;
    this.startY = touchobj.pageY;
    this.startTime = new Date().getTime(); // temps de début du contact
    e.preventDefault();
  }

  onTouchMove(e: TouchEvent) {
    e.preventDefault(); // empêcher le défilement lors du swipe
  }

  onTouchEnd(e: TouchEvent) {
    let touchobj = e.changedTouches[0];
    this.dist = touchobj.pageX - this.startX; // distance parcourue horizontalement
    this.elapsedTime = new Date().getTime() - this.startTime; // temps écoulé
    // vérifier si le swipe est valide
    //let swiperightBol = (this.elapsedTime <= this.allowedTime && this.dist >= this.threshold && Math.abs(touchobj.pageY - this.startY) <= 100);
    let swiperightBol = (this.elapsedTime <= this.allowedTime && this.dist >= this.threshold && Math.abs(touchobj.pageY - this.startY) <= 100);
    this.handleSwipe(swiperightBol);
    e.preventDefault();
  }


  toggleSkinOwned(skin: ChampionSkin) {
    skin.owned = !skin.owned;
    this.champioFetchingService.updateOwnedChampionSkin(this.champion,skin.num, skin.owned).subscribe({
      next: (res) => {
      skin.owned ?  alert(`Skin: ${skin.name} added to your collection`) : alert(`Skin: ${skin.name} removed from your collection`)
      },
      error: (err) => console.error(err)
    });
  }

  handleSwipe(isrightswipe: boolean): void {
    console.log(isrightswipe)
    if (isrightswipe) {
      this.goToNextSkin();
    } else {
      this.gotToPrevSkin();
    }
  }
}
