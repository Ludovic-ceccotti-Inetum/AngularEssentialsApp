import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ChampionSkin} from '../../../models/backend/champions/ChampionSkin';
import { SwippeUtilsService } from '../../../services/app/swippe-utils.service';

@Component({
  selector: 'app-champion-skins',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './champion-skins.component.html',
  styleUrl: './champion-skins.component.css'
})
export class ChampionSkinsComponent {
  @Input() skins: ChampionSkin[] = [];
  activeSkin: number = 0;

  //swipeUtilsService: SwippeUtilsService;


  /*constructor(swipeUtilsService: SwippeUtilsService) {
    this.swipeUtilsService = swipeUtilsService;
  }*/

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

  handleSwipe(isrightswipe: boolean): void {
    if (isrightswipe) {
      this.goToNextSkin();
    } else {
      this.gotToPrevSkin();
    }
  }
}
