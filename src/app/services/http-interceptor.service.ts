import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  apiRequest: HttpRequest<any>;

  constructor(private injector: Injector, private _router: Router) { }

  intercept(request, next) {
    const tokenService = this.injector.get(TokenService);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (JSON.stringify(request).includes('auth')) {
      return next.handle(request);
    } else if (tokenService.get() && currentUser) {
      this.apiRequest = request.clone({ setHeaders: { Authorization: tokenService.get() } });
      return next.handle(this.apiRequest);
    } else {
      this._router.navigate(['/notfound']);

    }


  }


}
