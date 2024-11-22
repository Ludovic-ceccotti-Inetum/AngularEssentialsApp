import {Component, EventEmitter, output, Output} from '@angular/core';

@Component({
  selector: 'app-champion-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './champion-search-bar.component.html',
  styleUrl: './champion-search-bar.component.css'
})
export class ChampionSearchBarComponent {
   searchValue = output<String>();

  sendSearch(value: Event) {
    const inputValue = value.target as HTMLInputElement;
      this.searchValue.emit(inputValue.value);
   }
}
