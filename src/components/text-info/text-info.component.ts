import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-text-info',
    imports: [],
    templateUrl: './text-info.component.html',
    styleUrl: './text-info.component.css'
})
export class TextInfoComponent {
  @Input() info: string = '';
}
