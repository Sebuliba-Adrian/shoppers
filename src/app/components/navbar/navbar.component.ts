import { Component, OnInit } from '@angular/core';
import { AuthSingletonService } from '../../services/auth-singleton.service';
import { Router } from '../../../../node_modules/@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _router: Router,
    private _token: TokenService) { }

  ngOnInit() {
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this._token.remove();
    this._router.navigateByUrl('/login');
  }

  isloggedIn() {
    return !!localStorage.getItem('token');
  }

}
