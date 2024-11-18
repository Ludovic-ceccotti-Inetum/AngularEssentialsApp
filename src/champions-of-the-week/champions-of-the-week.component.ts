import {Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Champion} from '../../models/Champion';
import {AppServiceService} from '../../services/app-service.service';

@Component({
  selector: 'app-champions-of-the-week',
  standalone: true,
  imports: [],
  templateUrl: './champions-of-the-week.component.html',
  styleUrl: './champions-of-the-week.component.css'
})
export class ChampionsOfTheWeekComponent implements OnChanges{
  @Input()
  searchOptions: any = {};

  title: String = 'Champions of the week:';
  private appService: AppServiceService;
  champions: Champion [];


  constructor() {
    this.appService = inject(AppServiceService);
    this.champions = this.appService.loadChampions(false);
  }


clearResult(): void {
    this.searchOptions = {};
    this.champions = this.appService.loadChampions(false);
}


  ngOnChanges(): void {
    if (this.searchOptions?.name?.length > 0 || this.searchOptions.positions?.length > 0  || this.searchOptions.type?.length > 0) {
      this.champions = this.appService.findChampions(this.champions,this.searchOptions)
    } else {
      this.champions = this.appService.loadChampions(false);
    }
  }

}
