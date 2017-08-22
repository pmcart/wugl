
import {LocationComponent} from '../location-component/location.component';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {
  Observable
} from 'rxjs'


@Component({
  selector: 'locations-list',
  templateUrl: './locations-list.component.html'
})


export class LocationsListComponent implements OnInit {
  private locationItems: Observable < any > ;

  constructor(private http: Http) {}

  ngOnInit() {
    this.loadLocations();
  }

  private loadLocations() {
    this.http.get("src/json/test.json")
      .map((data) => {
        console.log(data.json());
        return data.json();
      })
      .subscribe((success) => {
        this.locationItems = success;
      });
  }

}
