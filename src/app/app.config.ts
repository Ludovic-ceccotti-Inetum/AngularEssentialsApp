import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {loggingRequestStatusInterceptor} from '../../interceptors/requestFetchingInterceptors';

import { routes } from './app.routes';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {authInterceptor} from '../../interceptors/authInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(withFetch(),withInterceptors([authInterceptor,loggingRequestStatusInterceptor]))]
};
