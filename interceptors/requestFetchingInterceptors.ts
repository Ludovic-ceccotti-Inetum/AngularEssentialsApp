import {HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

export function loggingRequestStatusInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      switch (event.status) {
        case 200:
          console.log(`Fetching data from: ${req.method} ${req.url} succesfully`);
          break;
        case 400:
          console.error(`Bad request calling : ${req.method} ${req.url} : ${event.body}`);
          break;
        case 401:
          console.error(`Unauthorize to call ${req.method} ${req.url}`)
          break;
        case 403:
          console.error(`Calling ${req.method} ${req.url} is forbidden`)
          break
        case 500:
        case 503:
          console.error(`Server error from ${req.method} ${req.url}`)
          break
        default:
          console.log(`Calling ${req.method} ${req.url} ended with status: ${event.status}`)
      }
    }
  }));
}
