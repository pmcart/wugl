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


@Component({
  selector: 'locations-list',
  templateUrl: './locations-list.component.html'
})


export class LocationsListComponent implements OnInit {
  private locationItems: Observable < any > ;
  private tagsList: Observable < any > ;
  renderTime: boolean = false;

  constructor(private wuglapiService: WuglapiService) {}

  ngOnInit() {

    this.wuglapiService.getLocations().subscribe(locationItems => this.locationItems = locationItems);
    this.wuglapiService.getTags('UL').subscribe(tagsList => {
      this.tagsList = tagsList;
      this.renderTime = true;
    });
  }


}
