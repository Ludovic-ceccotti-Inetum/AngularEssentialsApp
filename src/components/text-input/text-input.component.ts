import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {
  @Input() inputValue: string = '';
  @Input() isReadonly: boolean = true;
}
