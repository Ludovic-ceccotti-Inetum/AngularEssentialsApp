import { Routes } from '@angular/router';
import {LoginPageComponent} from '../components/pages/login-page/login-page.component';
import {ChampionsPageComponent} from '../components/pages/champions-page/champions-page.component';
import {MyProfilePageComponent} from '../components/pages/my-profile-page/my-profile-page.component';
import {NotFoundPageComponent} from '../components/pages/not-found-page/not-found-page.component';
import {ObjectPageComponent} from '../components/pages/object-page/object-page.component';
import {ChampionInfoComponent} from '../components/pages/champion-info/champion-info/champion-info.component';
import {SignUpComponent} from '../components/pages/sign-up-page/sign-up.component';
import {AskResetComponent} from '../components/pages/reset-password/ask-reset/ask-reset/ask-reset.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'reset/ask', component: AskResetComponent },
  {path: 'signup', component: SignUpComponent},
  { path: 'champions', component: ChampionsPageComponent },
  {path: 'champions/:name', component: ChampionInfoComponent},
  {path: 'my-profile', component: MyProfilePageComponent },
  {path: 'objects', component: ObjectPageComponent },
  {path: '', redirectTo:'/login',pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent}
];
