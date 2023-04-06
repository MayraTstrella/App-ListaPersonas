import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
//to use firebase app
import firebase from 'firebase/compat/app'; //v9

//to use auth

import 'firebase/compat/auth'; //v9

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Listado de Personas';

  constructor() {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAdOw5CbRx-NYUoKKfcUpyF2tLm4fN2HZE",
      authDomain: "app-listapersonas.firebaseapp.com"
    })
  }



  
 
}
