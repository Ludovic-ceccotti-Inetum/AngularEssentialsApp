import {Component, inject} from '@angular/core';
import {Champion} from '../../models/Champion';
import {Position} from '../../models/Position';
import {ChampionType} from '../../models/ChampionType';
import {AppServiceService} from '../../services/app-service.service';

@Component({
  selector: 'app-champions-for-beginner',
  standalone: true,
  imports: [],
  templateUrl: './champions-for-beginner.component.html',
  styleUrl: './champions-for-beginner.component.css'
})
export class ChampionsForBeginnerComponent {
  title: String = 'Champions to start on the summoner rift';
  private appService = inject(AppServiceService);
  champions: Champion [] = this.appService.loadChampions(true);
}
