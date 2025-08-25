import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';
import { tokenGuard } from './tokenGuard';
import {AuthService} from '../services/auth/auth.service';
import {LoginResponse} from '../models/backend/login/LoginResponse';
import jwtDecode from 'jwt-decode';

describe('routingGuard', () => {
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;

  const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
    'eyJleHAiOjQ3MjIzMjAwMDB9.' +
    'dummySignature'; // exp in the future

  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => tokenGuard(...guardParameters));

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['getTokenFromStorage']);
    mockRouter = jasmine.createSpyObj('Router', ['parseUrl', 'createUrlTree']);

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    });
  });

  it('should allow access when token is valid', () => {
    const tokenResponse: LoginResponse = { token: validToken };
    mockAuthService.getTokenFromStorage.and.returnValue(tokenResponse);

    const result = executeGuard({ url: '/protected' } as any, {} as any);
    expect(result).toBeTrue();
  });
});
