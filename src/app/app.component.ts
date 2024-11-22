import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {LinkItemComponent} from '../components/link-item/link-item.component';
import {AppServiceService} from '../../services/app-service.service';
import {Champion} from '../../models/Champion';
import {LoginPageComponent} from '../components/pages/login-page/login-page.component';
import {ChampionsPageComponent} from '../components/pages/champions-page/champions-page.component';
import {MyProfilePageComponent} from '../components/pages/my-profile-page/my-profile-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LinkItemComponent, RouterLink, RouterLinkActive, MyProfilePageComponent, LoginPageComponent, ChampionsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private appService = inject(AppServiceService)
  title: String = 'my-little-angular-app';
  isBeginner: boolean = false;
  searchOptions: any = {};

  toggleBeginner() {
  this.isBeginner =  this.appService.toggleBeginner(this.isBeginner)
  }

  setSearchChampion(payload: Champion):void {
    this.searchOptions = payload;
  }

}
