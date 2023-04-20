import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {


    constructor (private loginServ: LoginService,
                 private router: Router) {

                 }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.loginServ.isLogin()) {
            return true;

        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}