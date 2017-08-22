import { Component} from '@angular/core';
import {LocationComponent} from '../location-component/location.component';
import {UserService } from '../services/user.service';
import { FacebookService, LoginResponse } from 'ngx-facebook';
@Component({
  selector: 'main-section',
     templateUrl: './main-section.component.html'
})
export class MainSectionComponent{
  constructor(private userService: UserService, private fb: FacebookService) {

   }

}
