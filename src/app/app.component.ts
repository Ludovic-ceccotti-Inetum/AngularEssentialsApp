import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LinkItemComponent} from '../link-item/link-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LinkItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-little-angular-app';
}
