import { Injectable } from '@angular/core';
import { User } from '../../entities/User';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';


const BACKEND_DOMAIN = 'http://localhost:8000';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(user: User) {
    return this._http.post(this.buildURL('/auth/register'), {
      name: user.name,
      email: user.email,
      password: user.password
    }).toPromise();
  }

  login(user: User): any {
    return this._http.post(this.buildURL('/auth/login'), {
      email: user.email,
      password: user.password
    }).toPromise();
  }

  buildURL(path) {
    return BACKEND_DOMAIN + path;
  }
}
