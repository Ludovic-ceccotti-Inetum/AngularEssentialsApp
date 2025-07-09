import { Component } from '@angular/core';
import {ObjectFetchingService} from '../../../../services/backend/objects/object-fetching.service';
import {ObjectListResponse} from '../../../../models/backend/objects/ObjectListResponse';
import {firstValueFrom} from 'rxjs';
import {ObjectDto} from '../../../../models/backend/objects/ObjectDto';
import {ObjectEntry} from '../../../../models/backend/objects/ObjectEntry';


@Component({
    selector: 'app-object-page',
    imports: [],
    templateUrl: './object-page.component.html',
    styleUrl: './object-page.component.css'
})
export class ObjectPageComponent {

  private objectFetchingService: ObjectFetchingService;

  private objectResponse: ObjectListResponse | null = null;
  private objects: ObjectDto[] = [];

  private _byCategories:Map<string,ObjectEntry[]> = new Map<string, ObjectEntry[]>();


  get byCategories(): Map<string, ObjectEntry[]> {
    return this._byCategories;
  }

  set byCategories(value: Map<string, ObjectEntry[]>) {
    this._byCategories = value;
  }

  constructor(objectFetchingService: ObjectFetchingService) {
    this.objectFetchingService = objectFetchingService;
    firstValueFrom(this.objectFetchingService.getLocalObjects())
      .then(res => this.onLoadingSuccess(res))
      .catch(e => console.error(e));
  }

  onLoadingSuccess(res: ObjectListResponse | null): void {
    console.log(res)
    if(res !== null) {
      this.objectResponse = res;
      this.objects = Object.values(res.data);
      this.createCategories();
      this.groupByCategory();
    } else {
      console.log('No data provided!');
    }
  }

  createCategories():void {
    this.objects.forEach(object => {
      object.tags.forEach(t => {
        this._byCategories.set(t, []);
      })

    });
  }


  groupByCategory(): void {
    if (this.objectResponse !== null) {
      Object.entries(this.objectResponse.data).forEach(k => {
        const key: string = k[0];
        const value: ObjectDto = k[1];
       this.processTags(key,value);
      });
    }
    console.log(this._byCategories);
  }



  processTags(key: string, value: ObjectDto): void {
    value.tags.forEach(tag => {
      this.addToCategory(tag, key, value);
    });
  }


  addToCategory(tag: string, key: string, value: ObjectDto): void {
    if (this._byCategories.has(tag)) {
      this._byCategories.get(tag)?.push({ id: key, value: value });
    } else {
      this._byCategories.set(tag, [{ id: key, value: value }]);
    }
  }

}
