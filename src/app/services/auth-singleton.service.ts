import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TokenService } from './token.service';

@Injectable()
export class AuthSingletonService {
  constructor(private _token: TokenService) { }

  private loggedIn = new BehaviorSubject<boolean>(this._token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);

  }

}
