import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private loginServ: LoginService) {

  }


  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.loginServ.login(email, password);
  }
}
