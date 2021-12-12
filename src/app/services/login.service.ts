import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public route: Router) { }
  
  logout() {
    localStorage.clear();
    this.route.navigate(['']);
  }

}
