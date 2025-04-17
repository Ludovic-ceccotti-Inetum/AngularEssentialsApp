import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-standard-button',
    imports: [],
    templateUrl: './standard-button.component.html',
    styleUrl: './standard-button.component.css'
})
export class StandardButtonComponent {
  @Input() buttonText: string ='';
  @Input() isDisabled: boolean = true;
  @Input() buttonId: string = '';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>;

  clickedChange():void {
    this.clicked.emit()
  };
}
