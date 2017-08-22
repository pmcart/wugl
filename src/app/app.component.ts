import {Component} from '@angular/core';

import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'my-app',
  template: `
    <maincontainer></maincontainer>
    
  `
})
export class AppComponent {
  
  constructor(private fb: FacebookService) {
    
       let initParams: InitParams = {
         appId: '822289287931042',
         xfbml: true,
         version: 'v2.10'
       };
    
       fb.init(initParams);
    
     }

}
