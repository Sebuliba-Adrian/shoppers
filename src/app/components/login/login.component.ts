import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../entities/User';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public model: User;

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _token: TokenService,
  ) { }

  ngOnInit() {
    this.model = new User();
  }

  async login() {
    try {
      const success = await this._auth.login(this.model);
      this._token.handle(success['access_token']);
      localStorage.setItem('currentUser', JSON.stringify(this.model));
      this._router.navigate(['/categories']);
      console.log(success);
    } catch (error) {
      console.error(error);
      alert('Bad credentials.');

    }
  }

}
