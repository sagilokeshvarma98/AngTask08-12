import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public route:Router) {}

  validateUser(userLogin: ILogin) {
    localStorage.setItem("username",userLogin.username)
    this.route.navigate(['home'])
  }

}
