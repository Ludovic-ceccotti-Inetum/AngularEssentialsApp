import {Component, output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Position, findPositionByKey} from '../../../models/Position';
import {AppServiceService} from '../../../services/app-service.service';
import {Champion} from '../../../models/Champion';
import {ChampionType, findChampionTypeByKey} from '../../../models/ChampionType';

class List<T> {
}

@Component({
  selector: 'app-search-champion-form',
  standalone: true,
  imports: [],
  templateUrl: './search-champion-form.component.html',
  styleUrl: './search-champion-form.component.css'
})
export class SearchChampionFormComponent {
  name: FormControl<string | null> = new FormControl<string>('');
  position: FormControl<string | null> = new FormControl<string>('');
  type: FormControl<string | null> = new FormControl<string>('');

  positionOptions: string[] = Object.keys(Position);
  roleOptions:string[] = Object.keys(ChampionType);
  payload = output<Champion>();

  private appService: AppServiceService;

  constructor(appService: AppServiceService) {
    this.appService = appService;
  }

  onNameChange(value: Event) {
    const stringValue = value.target as HTMLInputElement;
    if (stringValue.value.trim().length > 0) {
      this.name.setValue(stringValue.value);
    }
  }

  onTypeChange(value: Event) {
    const selectValue = value.target as HTMLSelectElement;
    this.type.setValue(selectValue.value.trim());
  }

  onPositionChange(value: Event) {
    const selectValue = value.target as HTMLSelectElement;
    this.position.setValue(selectValue.value.trim());
  }

  send():void {
    const position = findPositionByKey(this.position.value);
    const type = findChampionTypeByKey(this.type.value);
    const championParams = new Champion(this.name.value,type,position === undefined ? [] : [position]);
    this.payload.emit(championParams);
  }
}
