import { Routes } from '@angular/router';
import {LoginPageComponent} from '../components/pages/login-page/login-page.component';
import {ChampionsPageComponent} from '../components/pages/champions-page/champions-page.component';
import {MyProfilePageComponent} from '../components/pages/my-profile-page/my-profile-page.component';
import {NotFoundPageComponent} from '../components/pages/not-found-page/not-found-page.component';
import {ObjectPageComponent} from '../components/pages/object-page/object-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'champions', component: ChampionsPageComponent },
  {path: 'my-profile', component: MyProfilePageComponent },
  {path: 'objects', component: ObjectPageComponent },
  {path: '', redirectTo:'/login',pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent}
];
