import {Component, inject, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';;
import {AuthService} from '../../../../services/auth/auth.service';
import {LoginRequest} from '../../../../models/backend/login/LoginRequest';
import { Router} from '@angular/router';
import { TextInputComponent } from '../../text-input/text-input.component';
import { StandardButtonComponent } from '../../standard-button/standard-button.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    StandardButtonComponent,
    TextInputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  authService:AuthService = inject(AuthService);
  #router= inject(Router);

  pageTitle: string = 'Login';
  userNameLabel: string = 'Username';
  passwordlabel: string = 'Password';
  wrongLogin: boolean = false;

  userName: FormControl<string | null> = new FormControl('',[
    Validators.required, Validators.minLength(4), Validators.maxLength(50)
  ]);
  password: FormControl<string | null> = new FormControl('',[
    Validators.required, Validators.minLength(4), Validators.maxLength(12)
  ]);

  areNotNull: boolean = this.userName.value !== null && this.password.value !== null;

  onUserNameUpdate(value: string) {
    this.userName.setValue(value.trim());
  }

  onPasswordUpdate(value: string) {
    this.password.setValue(value.trim());
  }

  gotToSignup():void {
    this.#router.navigate(['signup']);
  }

  goToResetPassword(): void {
    this.#router.navigate(['reset/ask']);
  }

 async login(): Promise<void> {
   //debugger
    if(this.areNotNull && this.userName.valid && this.password.valid) {
      // @ts-ignore
      const payload:LoginRequest = {
        userName:this.userName.value,
        password: this.password.value
      }

        this.authService.createTokenFromLogin(payload).subscribe({
          next:(res) => {
            this.wrongLogin = false;
            sessionStorage.setItem('token',JSON.stringify(res));
            this.#router.navigate(['my-profile']);
          },
          error: (e) => this.wrongLogin = true
        });

    }
  }
}
