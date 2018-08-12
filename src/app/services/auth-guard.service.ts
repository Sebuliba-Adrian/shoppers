import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _token: TokenService, private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url === '/login' && localStorage.getItem('token')) {
      if (this._router.url === '/') {
        this._router.navigate(['/categories']);
      }
      return false;

    } else if (!localStorage.getItem('token')) {
      this._router.navigate(['/login']);
      return false;
    }


    return true;

  }



}
