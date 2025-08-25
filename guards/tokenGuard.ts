import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {LoginResponse} from '../models/backend/login/LoginResponse';
import {jwtDecode, JwtPayload} from 'jwt-decode';

/**
 * Check if user has a valid jwt token (is authenticated)
 * @param route
 * @param state
 */
export const tokenGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);
  const loginUrl = router.parseUrl('/login');
  //Login is always accessible
  const tokenResponse: LoginResponse | null = authService.getTokenFromStorage();

  if(tokenResponse === undefined || tokenResponse === null || tokenResponse.token.trim().length === 0) {
    console.error('No token provided!');
    return router.createUrlTree(['/login']);
  } else {
    try {
      const token: JwtPayload = jwtDecode(tokenResponse.token);
      console.log(`we are on ${route.url} route. Authentication needed`);
      console.log(`Found token ${token}`);
      return hasTokenValidExpirationdate(token) ? true : router.createUrlTree(['/login']);
    } catch (e) {
      console.error(e);
      return router.createUrlTree(['/login']);
    }
  }
};

function hasTokenValidExpirationdate(payload: JwtPayload) {
  if (payload.exp) {
    const now = Math.floor(Date.now() / 1000);
    return payload.exp > now;
  } else {
    return false;
  }
}
