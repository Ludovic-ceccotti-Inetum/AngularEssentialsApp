import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-text-input',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './text-input.component.html',
    styleUrl: './text-input.component.css'
})
export class TextInputComponent {
  @Input() inputId: string = '';
  @Input() placeHolder: string = '';
  @Input() isReadonly: boolean = false;
  @Input() isPassword: boolean = false;
  @Input() inputControl: FormControl<string | null> = new FormControl();
  @Output() inputChanged: EventEmitter<string> = new EventEmitter<string>();


  onInputChange(value: Event):void {
    const inputvalue = value.target as HTMLInputElement;
    this.inputChanged.emit(inputvalue.value.trim())
  }
}
