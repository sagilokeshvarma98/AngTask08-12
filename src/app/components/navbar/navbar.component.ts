import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _LS: LoginService) { }

  public name:any = "";

  ngOnInit(): void {
    this.name = localStorage.getItem("username");
  }

  logout() {
    this._LS.logout()
  }

}
