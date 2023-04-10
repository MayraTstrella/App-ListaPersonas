import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
//to use firebase app
import firebase from 'firebase/compat/app'; //v9

//to use auth

import 'firebase/compat/auth'; //v9

@Injectable()
export class LoginService {

    token: string;

    constructor( private router: Router){

    }

    login( email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            resp => {
                firebase.auth().currentUser?.getIdToken().then(
                    token => {
                        this.token = token;
                        this.router.navigate(['/']);
                    }
                )
            }
        )
    }


    getIdToken() {
        return this.token;
    }

    isLogin() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut().then( () => {
            this.token = null;
            this.router.navigate(['login']);
        } )
    }
}