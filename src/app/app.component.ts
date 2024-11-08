import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LinkItemComponent} from '../link-item/link-item.component';
import {ChampionsOfTheWeekComponent} from '../champions-of-the-week/champions-of-the-week.component';
import {ChampionsForBeginnerComponent} from '../champions-for-beginner/champions-for-beginner.component';
import {AppServiceService} from '../../services/app-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LinkItemComponent,ChampionsOfTheWeekComponent, ChampionsForBeginnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private appService = inject(AppServiceService)
  title: String = 'my-little-angular-app';
  isBeginner: boolean = false;

  toggleBeginner() {
  this.isBeginner =  this.appService.toggleBeginner(this.isBeginner)
  }
}
