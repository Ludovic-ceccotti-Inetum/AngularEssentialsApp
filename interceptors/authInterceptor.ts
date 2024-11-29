import {HttpHandlerFn,HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {throwError} from 'rxjs';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  console.log(`Adding authorization credentials before request to: ${req.method} ${req.url}`);
  const username = 'naughtysushi';
  const password = 'sushi';

  const basicAuth: string | null = inject(AuthService).getBasicCredentialsFromStorage();
  if(basicAuth === null) throwError(() => new Error('Authorization credentials not found'));
  const newReq = req.clone({
    headers: req.headers.append('Authorization','Basic ' + btoa(username + ':' + password)).append('Content-Type','application/json')
    // headers: req.headers.append('X-Authentication-Token', authToken),
  });
  return next(newReq);
}
