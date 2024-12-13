import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tags-with-icon',
  standalone: true,
  imports: [],
  templateUrl: './tags-with-icon.component.html',
  styleUrl: './tags-with-icon.component.css'
})
export class TagsWithIconComponent {
    @Input() tags: string[] = [];
}
