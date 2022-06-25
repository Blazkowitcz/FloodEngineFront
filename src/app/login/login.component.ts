import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  username: String = "";
  password: String = "";

  async login(){
    let user = await this.loginService.login(this.username, this.password);
    localStorage.setItem('token', user.token);
  }

  ngOnInit(): void {
  }

}
