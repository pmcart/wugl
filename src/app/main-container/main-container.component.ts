import { Component, Input } from '@angular/core';

@Component({
  selector: 'maincontainer',
  template: `
    <div class='container'>

    <div>
      <router-outlet></router-outlet>
   </div>
      </div>

  `
  
})

export class MainContainerComponent {

   
}

