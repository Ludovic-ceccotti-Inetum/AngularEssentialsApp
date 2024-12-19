import {HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Observable, throwError} from 'rxjs';
import {LoginResponse} from '../models/backend/login/LoginResponse';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  // Don't add token if we login for the first time
  if(req.method === 'POST' && (req.url.endsWith('/login') || req.url.endsWith('/user/create')) && !sessionStorage.getItem('token')) {
    return next(req);
  } else {
    console.log(`Adding authorization credentials before request to: ${req.method} ${req.url}`);

    const token: LoginResponse | null = inject(AuthService).getTokenFromStorage();
    if (token === null) throwError(() => new Error('Authorization credentials not found'));
    const newReq = req.clone({
      headers: req.headers
        .append('Authorization', 'Bearer ' + token?.token)
        .append('Content-Type', 'application/json')
      // headers: req.headers.append('X-Authentication-Token', authToken),
    });
    return next(newReq);
  }
}
