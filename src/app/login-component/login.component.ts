import {
  Component
} from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { FacebookService, LoginResponse } from 'ngx-facebook';
import {UserService } from '../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
 
  constructor(private fb: FacebookService, private router: Router, private userService: UserService) { }

  private isLoggedIn: boolean = false; 
 

  checkLoginStatus() : any {
    console.log('Calling checkLoginStatus');
    let returnVal = false;
    this.fb.getLoginStatus().then((i) => {
      if(i.status === 'connected'){
        returnVal = true;
        this.userService.userID = i.authResponse.userID;
        this.userService.accessToken = i.authResponse.accessToken;
        
        this.fb.api(this.userService.userID + '?access_token=' + this.userService.accessToken ).then(res => this.userService.userName = res.name)
        .catch(e => console.log(e));
        
        this.fb.api(this.userService.userID +  '/picture?access_token=' + this.userService.accessToken ).then(res => this.userService.userImgURL = res.data.url)
        .catch(e => console.log(e));

        
      }
      else{
        this.router.navigate(['/login']);
        return returnVal;
      }
    })
    .catch(e => {
      console.error(e);
      return returnVal;
    })
   
  
  }

  loginWithFacebook(): void {
    console.log('Calling loginWithFacebook');
      this.fb.getLoginStatus().then((i) => {
        if(i.status === 'connected'){
          this.isLoggedIn = true;
        }
      })
      .catch(e => {
      })

      if(!this.isLoggedIn){
        this.fb.login()
          .then((response: LoginResponse) => this.router.navigate(['/home']))
         .catch((error: any) => console.error(error));
        }
     }
}
