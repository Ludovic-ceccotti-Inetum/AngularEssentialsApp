import {Component, inject} from '@angular/core';
import {Champion} from '../../models/Champion';
import {AppServiceService} from '../../services/app-service.service';

@Component({
  selector: 'app-champions-of-the-week',
  standalone: true,
  imports: [],
  templateUrl: './champions-of-the-week.component.html',
  styleUrl: './champions-of-the-week.component.css'
})
export class ChampionsOfTheWeekComponent {
  title: String = 'Champions of the week:';
  private appService = inject(AppServiceService);
  champions: Champion [] = this.appService.loadChampions(false);
}
