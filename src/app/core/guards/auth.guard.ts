import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, first, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ModalServiceService } from 'src/app/components/services/modal/modal-service.service';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly modalServiceService: ModalServiceService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.getIsAuth();
    // if (localStorage.getItem('token')) {
    //   return true;
    // } else {
    //   this.router.navigate(['login']);
    //   return false;
    // }
  }
  private getIsAuth(): Observable<boolean> {
    if (this.modalServiceService.isLogged) {
      return of(true);
    } else {
      this.router.navigate(['login']);
      return of(false);
    }
  }
}
