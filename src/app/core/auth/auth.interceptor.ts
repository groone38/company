import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ModalServiceService } from 'src/app/components/services/modal/modal-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly modalServiceService: ModalServiceService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token') as string;

    if (!!token) {
      request = request.clone({
        setHeaders: { Authorization: token },
      });
    }

    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpRequest) console.log('server responce');
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) console.log('Unauthorized');
          }
        }
      )
    );
  }
}
