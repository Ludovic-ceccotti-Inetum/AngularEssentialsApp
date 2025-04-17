import { Component } from '@angular/core';
import {ObjectFetchingService} from '../../../../services/backend/objects/object-fetching.service';

@Component({
    selector: 'app-object-page',
    imports: [],
    templateUrl: './object-page.component.html',
    styleUrl: './object-page.component.css'
})
export class ObjectPageComponent {

  private objectFetchingService: ObjectFetchingService;


  constructor(objectFetchingService: ObjectFetchingService) {
    this.objectFetchingService = objectFetchingService;
    this.objectFetchingService.getAllObjects();
  }
}
