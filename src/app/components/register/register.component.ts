import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../entities/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  public model: User;

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    this.model = new User();
  }

  async submitHandler() {
    try {
      const response = await this._auth.register(this.model);
      this._router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }

  }

}
