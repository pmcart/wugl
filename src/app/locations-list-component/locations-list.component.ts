import {
  LocationComponent
} from '../location-component/location.component';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable
} from 'rxjs'
import {
  WuglapiService
} from '../services/wuglapi.service'
import {
  UserService
} from '../services/user.service';

import {ITag} from '../interfaces/ITag';
import {ILocation} from '../interfaces/ILocation';
@Component({
  selector: 'locations-list',
  templateUrl: './locations-list.component.html'
})


export class LocationsListComponent implements OnInit {
  private locationItems: Observable < ILocation > ;
  private tagsList: Observable < ITag > ;
  renderTime: boolean = false;

  constructor(private wuglapiService: WuglapiService, private userService: UserService,) {}

  ngOnInit() {

    this.wuglapiService.getLocations().subscribe(locationItems => this.locationItems = locationItems);
    this.wuglapiService.getTags(this.userService.citySelected).subscribe(tagsList => {
      this.tagsList = tagsList;
      this.renderTime = true;
    });
  }


}
