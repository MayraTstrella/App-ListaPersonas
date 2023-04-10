import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
//to use firebase app
import firebase from 'firebase/compat/app'; 

//to use auth

import 'firebase/compat/auth'; 
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Listado de Personas';

  constructor( private loginServ: LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAdOw5CbRx-NYUoKKfcUpyF2tLm4fN2HZE",
      authDomain: "app-listapersonas.firebaseapp.com"
    })

  }
  
  isAuth() {
    return this.loginServ.isLogin();
  }
  
  salir() {
    this.loginServ.logout();
  }

  
 
}
