import {
  Component
} from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {
  FacebookService,
  LoginResponse
} from 'ngx-facebook';
import {
  UserService
} from '../services/user.service';
import {
  WuglapiService
} from '../services/wuglapi.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  private isLoggedIn: boolean = false;

  constructor(private fb: FacebookService, private router: Router,
    private userService: UserService,
    private wuglapiService: WuglapiService) {
    
    }

  checkLoginStatus(): any {
    console.log('Calling checkLoginStatus');
    let returnVal = false;
    this.fb.getLoginStatus().then((i) => {
        if (i.status === 'connected') {
          returnVal = true;
          this.userService.userID = i.authResponse.userID;
          this.userService.accessToken = i.authResponse.accessToken;

          // this.fb.api(this.userService.userID + '?access_token=' + 
          // this.userService.accessToken).then(res => this.userService.userName = res.name)
          //   .catch(e => console.log(e));

          // this.fb.api(this.userService.userID + '/picture?access_token=' + 
          // this.userService.accessToken).then(res => this.userService.userImgURL = res.data.url)
          //   .catch(e => console.log(e));

          this.fb.api('/me').then(res => this.userService.userName = res.name)
            .catch(e => console.log(e));

          // let data: Object = {
          //   id: this.userService.userID,
          //   imgURL: this.userService.userImgURL,
          //   userName: this.userService.userName,
          //   gender: "",
          //   lastTagDate: "10/10/17",
          //   citySelected: ""
          // };
          
          this.wuglapiService.checkUserExists(this.userService.userID).subscribe(exists => {
            if(exists === 'true'){
              console.log("User exists in DB");
            }
            else{
              console.log("User does not exist in DB");
              //this.wuglapiService.createUser(data);
            }
          });
        
        } else {
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
      console.log('Calling loginWithFacebook - fb.getLoginStatus()');
      console.log(console.log(i));
        if (i.status === 'connected') {
          this.isLoggedIn = true;
        }
      })
      .catch(e => {})

    if (!this.isLoggedIn) {

      this.fb.login().then((response: LoginResponse) => {
        console.log('Calling loginWithFacebook - fb.login()');
        console.log(console.log(response));

        this.userService.userID = response.authResponse.userID;
        this.userService.accessToken = response.authResponse.accessToken;

        this.wuglapiService.checkUserExists(this.userService.userID).subscribe(exists => {
          if(exists === 'true'){
            console.log("User exists in DB");
            this.router.navigate(['/home']);
          }
          else{

            let data: Object = {
              id: this.userService.userID,
              imgURL: this.userService.userImgURL,
              userName: this.userService.userName,
              gender: "",
              lastTagDate: "10/10/17",
              citySelected: ""
            };
            this.wuglapiService.createUser(data);
            this.router.navigate(['/choose-location']);
          }
        });

        }).catch((error: any) => console.error(error));
    }


  }
}
