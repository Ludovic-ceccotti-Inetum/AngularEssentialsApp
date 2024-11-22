import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-link-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.css',
  inputs: ['title','classes','links','color']
})
export class LinkItemComponent {
  @Input() title: string;
  @Input() link: string;
  @Input() color: String;
  @Input() isRouterLink: boolean;
  classes: String [];

  // fill with default values
  constructor() {
    this.title = 'No title provided!';
    this.link = 'Link is absent!';
    this.color = 'first';
    this.classes = ['pill',this.color];
    this.isRouterLink = false;
  }
}

