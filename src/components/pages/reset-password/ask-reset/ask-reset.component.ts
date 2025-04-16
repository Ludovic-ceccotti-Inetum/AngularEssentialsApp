import { Component } from '@angular/core';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import {StandardButtonComponent} from '../../../standard-button/standard-button.component';
import {TextInputComponent} from '../../../text-input/text-input.component';
import {LoginService} from '../../../../../services/backend/login/login.service';

@Component({
  selector: 'app-ask-reset',
  standalone: true,
  imports: [
    FormsModule,
    StandardButtonComponent,
    TextInputComponent
  ],
  templateUrl: './ask-reset.component.html',
  styleUrl: './ask-reset.component.css'
})
export class AskResetComponent {
  private loginService: LoginService;

  pageTitle: string = 'Reset your password';
  userNameLabel = 'Username';
  userName: FormControl<string | null> = new FormControl('',[
    Validators.required, Validators.minLength(4), Validators.maxLength(50)
  ]);


  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  onUserNameUpdate(value: string): void {
    this.userName.setValue(value.trim());
  }

  sendResetRequest(): void {
    if (this.userName !== null && this.userName.valid) {
     this.loginService.askResetPassword(this.userName.value).subscribe(
       {
         next: this.handleSuccess,
         error: err => console.error(err)
       }
     );
    }
  }

  handleSuccess(res: number | null) {
    console.log(`Password reset token for ${this.userName} : ${res}`);
    alert('An email has been sent for resetting your email.')
  }
}
