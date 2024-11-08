import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-link-item',
  standalone: true,
  imports: [],
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.css'
})
export class LinkItemComponent {
  @Input() title: string;
  @Input() link: string;

  // fill with default values
  constructor() {
    this.title = '';
    this.link = '';
  }
}

