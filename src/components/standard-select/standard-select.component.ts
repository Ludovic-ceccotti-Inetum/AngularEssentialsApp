import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AvalaibleOption} from '../../../models/AvalaibleOption';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-standard-select',
    imports: [
        FormsModule
    ],
    templateUrl: './standard-select.component.html',
    styleUrl: './standard-select.component.css'
})
export class StandardSelectComponent {
  @Input() selectId: string = '';
  @Input() selectName: string='';
  @Input() availableOptions: AvalaibleOption[]= [];
  @Output() optionChanged: EventEmitter<string> = new EventEmitter<string>();

  onValueChange(event: Event):void {
    const inputValue = event.target as HTMLInputElement;
    this.optionChanged.emit(inputValue.value.trim());
  }
}
