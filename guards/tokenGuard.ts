import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {LoginResponse} from '../models/backend/login/LoginResponse';

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
  const token: LoginResponse | null = authService.getTokenFromStorage();
  console.log(`we are on ${route.url} route. Authentication needed`);
  console.log(`Found token ${token?.token}`);
  const isTokenValid = token !== undefined && token !== null && token.token.trim().length > 0;
  return isTokenValid ? true : router.createUrlTree(['/login']);
};

//TODO: replace with jwt-decode library
function isValidJwt(token: string): boolean {
  const parts = token.split('.');
  if (parts.length !== 3) return false;

  try {
    const payload = JSON.parse(atob(parts[1]));
    if (payload.exp) {
      const now = Math.floor(Date.now() / 1000);
      return payload.exp > now;
    }
    return true; // Pas d'expiration, on considère valide
  } catch (e) {
    return false;
  }}
