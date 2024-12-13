import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwippeUtilsService {

  constructor() { }

  startX: number = 0;
  startY: number = 0;
  dist: number = 0;
  threshold: number = 150; // distance minimale pour être considéré comme un swipe
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

  onTouchEnd(e: TouchEvent,callbackRight: () => void, callbackLeft: () => void) {
    let touchobj = e.changedTouches[0];
    this.dist = touchobj.pageX - this.startX; // distance parcourue horizontalement
    this.elapsedTime = new Date().getTime() - this.startTime; // temps écoulé
    // vérifier si le swipe est valide
    //let swiperightBol = (this.elapsedTime <= this.allowedTime && this.dist >= this.threshold && Math.abs(touchobj.pageY - this.startY) <= 100);
    let swiperightBol = (this.elapsedTime <= this.allowedTime && this.dist >= this.threshold && Math.abs(touchobj.pageY - this.startY) <= 100);
    this.handleSwipe(swiperightBol,callbackRight,callbackLeft);
    e.preventDefault();
  }

  handleSwipe(isrightswipe: boolean, callbackRight: () => void, callbackLeft: () => void): void {
    if (isrightswipe) {
      callbackRight();
    } else {
      callbackLeft();
    }
  }
}
