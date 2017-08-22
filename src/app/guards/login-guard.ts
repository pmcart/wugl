import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { Injectable } from '@angular/core';
import {LoginComponent} from '../login-component/login.component';


@Injectable()
export class LoginRouteGuard implements CanActivate {

  constructor(private loginComponent: LoginComponent, private router:Router) {}

  canActivate() {
    console.log("LoginRouteGuard - CanActivate");
    if(this.loginComponent.checkLoginStatus() === false){
      this.router.navigate(['/login']);
      return false;
    }
    else{
      return true;
    }
  }
}