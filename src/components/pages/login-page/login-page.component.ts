import {Component, inject, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {AuthService} from '../../../../services/auth.service';
import {LoginRequest} from '../../../../models/backend/LoginRequest';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
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
    Validators.required, Validators.minLength(4), Validators.maxLength(20)
  ]);
  password: FormControl<string | null> = new FormControl('',[
    Validators.required, Validators.minLength(4), Validators.maxLength(12)
  ]);

  areNotNull: boolean = this.userName.value !== null && this.password.value !== null;

  onUsernameUpdate(value: Event) {
    const inputvalue = value.target as HTMLInputElement;
    this.userName.setValue(inputvalue.value.trim());
  }

  onPasswordUpdate(value: Event) {
    const inputvalue = value.target as HTMLInputElement;
    this.password.setValue(inputvalue.value.trim());
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
