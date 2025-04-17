import {Component, inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TextInputComponent} from '../../../text-input/text-input.component';
import {StandardButtonComponent} from '../../../standard-button/standard-button.component';
import {ActivatedRoute, Router} from '@angular/router';
import {ChangePasswordRequest} from '../../../../../models/backend/login/ChangePasswordRequest';
import {LoginService} from '../../../../../services/backend/login/login.service';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

@Component({
    selector: 'app-do-reset',
    imports: [TextInputComponent, StandardButtonComponent],
    templateUrl: './do-reset.component.html',
    styleUrl: './do-reset.component.css'
})
export class DoResetComponent {
  private route: ActivatedRoute;
  #router: Router;
  private loginService: LoginService;

  token: string | null = null;
  payload: ChangePasswordRequest | null = null;
  pageTitle: string = 'Modify your password';
  newPasswordLabel: string = 'Enter your new password';
  confirmNewPasswordLabel: string = 'Confirm your password by entering it again';
  newPassword: FormControl<string | null> = new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(10)]) ;
  confirmNewPassword: FormControl<string| null> =  new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(10)]);

  constructor(private routed: ActivatedRoute, private router: Router, private loginServicee: LoginService ) {
    this.route = routed;
    this.#router = router;
    this.loginService = loginServicee
  }

  ngOnInit() {
      this.route.queryParamMap.subscribe((param) =>{
        if(param.has('token')) {
          this.token = param.get('token');
        } else {
          console.error('No reset password token provided!')
        }
      } )
  }

  onNewPasswordChange(value: string): void {
    this.newPassword.setValue(value.trim());
  }

  onNewPasswordConfirmationChange(value: string) {
    if(value.trim() === this.newPassword.value?.trim()) {
      this.confirmNewPassword.setValue(value.trim());
    }
}

  async sendNewPassword():Promise<void> {
    if (this.confirmNewPassword.value !== null && this.token !== null) {
      this.payload = {
        newPassword: this.confirmNewPassword.getRawValue(),
        token: this.token
      }

      this.loginService.doResetPassword(this.payload).subscribe({
        next: this.handleSuccess,
        error: (err) => console.error(err)
      });

    } else {
      console.error('cannot send new password to server. Password or token is missing')
    }
  }

  handleSuccess(success: boolean | null) {
      alert(success ? 'Password succesfully modified' : 'Failing to reset password');
      this.#router.navigate(['/login']);
  }

}
