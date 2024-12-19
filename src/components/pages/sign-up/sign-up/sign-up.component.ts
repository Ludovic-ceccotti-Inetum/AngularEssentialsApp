import {Component, inject, OnInit} from '@angular/core';
import { StandardButtonComponent } from '../../../standard-button/standard-button.component';
import { TextInputComponent } from '../../../text-input/text-input.component';
import { StandardSelectComponent } from '../../../standard-select/standard-select.component';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {AvalaibleOption} from '../../../../../models/AvalaibleOption';
import {SignupService} from '../../../../../services/backend/signup/signup.service';
import {SignupRequest} from '../../../../../models/backend/signup/SignupRequest';
import {SignupResponse} from '../../../../../models/backend/signup/SignupResponse';
import {AuthService} from '../../../../../services/auth/auth.service';
import {LoginRequest} from '../../../../../models/backend/login/LoginRequest';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [StandardSelectComponent,StandardButtonComponent,TextInputComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent{

  #router:Router;

  pageTitle: string = 'Create an account';
  userNameLabel: string = 'Username';
  passwordlabel: string = 'Password';
  emailLabel:string='Email';
  wrongLogin: boolean = false;

  regionOptions: AvalaibleOption[] = [
    {displayName: 'West Europe', value: 'EUW'},
    {displayName: 'Oceania', value: 'OCE'},
    {displayName: 'Russia', value: 'RU'},
    {displayName: 'Brazil', value: 'BR'}
  ];

  userName: FormControl<string | null> = new FormControl('',[
    Validators.required, Validators.minLength(4), Validators.maxLength(50)
  ]);

  password: FormControl<string | null> = new FormControl('',[
    Validators.required, Validators.minLength(4), Validators.maxLength(12)
  ]);

  email: FormControl<string | null> = new FormControl('',[
    Validators.required,Validators.email, Validators.minLength(4), Validators.maxLength(50)
  ]);

  region: FormControl<string | null> = new FormControl(this.regionOptions[0].value,[
    Validators.required
]);


  constructor(private signupService: SignupService, private authService:AuthService) {
    this.#router = inject(Router);
  }

  onUsernameUpdate(value: string) {
    this.userName.setValue(value.trim());
  }

  onPasswordUpdate(value: string) {
    this.password.setValue(value.trim());
  }

  onEmailChange(value: string): void {
    this.email.setValue(value.trim());
  }

  onRegionUpdate(value: string): void {
    this.region.setValue(value.trim());
  }

  onSignupSucess = (res:SignupResponse) => {
    const login: LoginRequest = {
      userName:res?.username,
      password: this.password.getRawValue()
    }
    this.authService.createTokenFromLogin(login).subscribe({
      next:(res) => {
        this.wrongLogin = false;
        sessionStorage.setItem('token',JSON.stringify(res));
        this.#router.navigate(['my-profile']);
      },
      error: (e) => this.wrongLogin = true
    });
  }

  onSignupError = (err:any) => {
    console.error(err);
    this.wrongLogin = true;
  };

  async signup(): Promise<void> {
    const isUserNameValid = this.userName.valid && this.userName.value !== null;
    const isPasswordValid = this.password.valid && this.password.value !== null;
    const isEmailValid = this.email.valid && this.email.value !== null;

    if(isUserNameValid && isPasswordValid && isEmailValid && this.region.valid) {
      const payload:SignupRequest = {
        userName: this.userName.getRawValue(),
        password: this.password.getRawValue(),
        email: this.email.getRawValue(),
        region: this.region.getRawValue()
      }
      this.signupService.signup(payload).subscribe({
        next:(res) => {
          if (res) {
            this.onSignupSucess(res);
          }
      },
        error: (err) => {
         this.onSignupError(err);
      }
      });
    }
  }
}
