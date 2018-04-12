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
    UserService
  } from '../services/user.service';
  import {
    WuglapiService
  } from '../services/wuglapi.service';
  
  @Component({
    selector: 'choose-location',
    templateUrl: './choose-location.component.html',
  })
  export class ChooseLocationComponent {
  
    private isLoggedIn: boolean = false;
    selectedCity = "@";
    // cities = [
    //   {id: 1, name: "Letterkenny"},
    //   {id: 2, name: "Dublin"},
    //   {id: 3, name: "Galway"},
    //   {id: 4, name: "Limerick"},
    //   {id: 5, name: "Cork"}
    // ];
    private cities: any; 
    constructor(private router: Router,
      private userService: UserService,
      private wuglapiService: WuglapiService) {

        this.wuglapiService.getCities().subscribe(cities => {
          this.cities = cities;
        });
      }
     

      setLocation(): any {
        let data: Object = {
          id: this.userService.userID,
          citySelected: this.selectedCity['id'] 
        };
        this.wuglapiService.setUserLocation(data);
        this.userService.citySelected = this.selectedCity['id'];
        this.router.navigate(['/home']);
        //console.log(this.selectedCity['name']);
      }
  
  }
  