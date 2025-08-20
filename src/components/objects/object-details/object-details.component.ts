import {Component, Input} from '@angular/core';
import {ObjectEntry} from '../../../../models/backend/objects/ObjectEntry';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-object-details',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './object-details.component.html',
  styleUrl: './object-details.component.css'
})
export class ObjectDetailsComponent {
@Input() object: ObjectEntry | null = null;

}
