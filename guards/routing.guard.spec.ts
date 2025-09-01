import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';
import { tokenGuard } from './tokenGuard';
import {AuthService} from '../services/auth/auth.service';
import {LoginResponse} from '../models/backend/login/LoginResponse';

describe('tokenGuard', () => {
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;

  const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
    'eyJleHAiOjQ3MjIzMjAwMDB9.' +
    'dummySignature'; // exp dans le futur

  const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
    `eyJleHAiOjE2MDAwMDAwMDB9.` +
    'dummySignature'; // exp dans le passé

  const malformedToken = 'invalid.token.structure';

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

    mockRouter.createUrlTree.and.returnValue('/login');
  });

  it('should allow access when token is valid', () => {
    const tokenResponse: LoginResponse = { token: validToken };
    mockAuthService.getTokenFromStorage.and.returnValue(tokenResponse);

    const result = executeGuard({ url: '/protected' } as any, {} as any);
    expect(result).toBeTrue();
  });

  it('should redirect to login when token is missing', () => {
    mockAuthService.getTokenFromStorage.and.returnValue(null);

    const result = executeGuard({ url: '/protected' } as any, {} as any);
    expect(result).toBe('/login');
    expect(mockRouter.createUrlTree).toHaveBeenCalledWith(['/login']);
  });

  it('should redirect to login when token is empty string', () => {
    const tokenResponse: LoginResponse = { token: '   ' };
    mockAuthService.getTokenFromStorage.and.returnValue(tokenResponse);

    const result = executeGuard({ url: '/protected' } as any, {} as any);
    expect(result).toBe('/login');
    expect(mockRouter.createUrlTree).toHaveBeenCalledWith(['/login']);
  });

  it('should redirect to login when token is expired', () => {
    const tokenResponse: LoginResponse = { token: expiredToken };
    mockAuthService.getTokenFromStorage.and.returnValue(tokenResponse);

    const result = executeGuard({ url: '/protected' } as any, {} as any);
    expect(result).toBe('/login');
    expect(mockRouter.createUrlTree).toHaveBeenCalledWith(['/login']);
  });

  it('should redirect to login when token is malformed', () => {
    const tokenResponse: LoginResponse = { token: malformedToken };
    mockAuthService.getTokenFromStorage.and.returnValue(tokenResponse);

    const result = executeGuard({ url: '/protected' } as any, {} as any);
    expect(result).toBe('/login');
    expect(mockRouter.createUrlTree).toHaveBeenCalledWith(['/login']);
  });
});

