import {Component, OnInit} from '@angular/core';
import {ObjectFetchingService} from '../../../../services/backend/objects/object-fetching.service';
import {ObjectListResponse} from '../../../../models/backend/objects/ObjectListResponse';
import {firstValueFrom} from 'rxjs';
import {ObjectDto} from '../../../../models/backend/objects/ObjectDto';
import {ObjectEntry} from '../../../../models/backend/objects/ObjectEntry';
import {ObjectCategoryItemsComponent} from '../../objects/object-category-items/object-category-items.component';

@Component({
  selector: 'app-object-page',
  templateUrl: './object-page.component.html',
  imports: [
    ObjectCategoryItemsComponent
  ],
  styleUrl: './object-page.component.css'
})
export class ObjectPageComponent implements OnInit{

  private objectFetchingService: ObjectFetchingService;

  private objectResponse: ObjectListResponse | null = null;
  private objects: ObjectDto[] = [];

  private _byCategories:Map<string,ObjectEntry[]> = new Map<string, ObjectEntry[]>();

  private _categories: string[] = [];

  constructor(objectFetchingService: ObjectFetchingService) {
    this.objectFetchingService = objectFetchingService;
  }

  get categories(): string[] {
    return this._categories;
  }

  get byCategories(): Map<string, ObjectEntry[]> {
    return this._byCategories !== undefined ? this._byCategories : new Map<string, ObjectEntry[]>();
  }

  onLoadingSuccess(res: ObjectListResponse | null): void {
    if(res !== null) {
      this.objectResponse = res;
      this.objects = Object.values(res.data);
      this.createCategories();
      this.groupByCategory();
    } else {
      console.error('No data provided!');
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
    this._categories = Array.from(this._byCategories.keys());
  }


  processTags(key: string, value: ObjectDto): void {
   this.addToCategory(value.tags[0],key,value);
  }

  /*processTags(key: string, value: ObjectDto): void {
    value.tags.forEach(tag => {
      this.addToCategory(tag, key, value);
    });
  }*/


  addToCategory(tag: string, key: string, value: ObjectDto): void {
    if (this._byCategories.has(tag)) {
      this._byCategories.get(tag)?.push({ id: key, value: value });
    } else {
      this._byCategories.set(tag, [{ id: key, value: value }]);
    }
  }

  ngOnInit(): void {
    firstValueFrom(this.objectFetchingService.getAllObjects())
      .then(res => this.onLoadingSuccess(res))
      .catch(e => console.error(e));
  }

}
