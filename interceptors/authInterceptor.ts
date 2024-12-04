import {HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Observable, throwError} from 'rxjs';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  // Don't add token if we login for the first time
  if(req.method === 'POST' && req.url.endsWith('/login') && !sessionStorage.getItem('token')) {
    return next(req);
  } else {
    console.log(`Adding authorization credentials before request to: ${req.method} ${req.url}`);
    const username = 'naughtysushi';
    const password = 'sushi';

    const basicAuth: string | null = inject(AuthService).getBasicCredentialsFromStorage();
    if (basicAuth === null) throwError(() => new Error('Authorization credentials not found'));
    const newReq = req.clone({
      headers: req.headers.append('Authorization', 'Basic ' + btoa(username + ':' + password)).append('Content-Type', 'application/json')
      // headers: req.headers.append('X-Authentication-Token', authToken),
    });
    return next(newReq);
  }
}
