import {Component, Input} from '@angular/core';
import {ObjectEntry} from '../../../../models/backend/objects/ObjectEntry';
import {ObjectDetailsComponent} from '../object-details/object-details.component';

@Component({
  selector: 'app-object-category-items',
  imports: [
    ObjectDetailsComponent
  ],
  templateUrl: './object-category-items.component.html',
  styleUrl: './object-category-items.component.css'
})
export class ObjectCategoryItemsComponent {

  @Input() category: string = '';
  @Input() values: ObjectEntry [] | undefined = [];

  private _showObjects: boolean = false;


  get showObjects(): boolean {
    return this._showObjects;
  }

  toggleShow(): void {
    this._showObjects = !this._showObjects;
  }

}
