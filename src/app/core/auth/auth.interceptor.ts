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
import jwt_decode from 'jwt-decode';
import { GeneralService } from './../../components/services/general.service';

interface JWT {
  id: number;
  role: number;
  iat: number;
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly generalService: GeneralService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token') as string;
    if (!!token) {
      let decoded: JWT = jwt_decode(token);
      if (decoded.role) {
        this.generalService.admin = true;
      }

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
