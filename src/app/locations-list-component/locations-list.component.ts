
import {LocationComponent} from '../location-component/location.component';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http,
  Response,
  Headers,
  RequestOptions
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
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.get("http://localhost:3000/location", options)
      .map((data) => {
        console.log(data.json());
        return data.json();
      })
      .subscribe((success) => {
        this.locationItems = success;
        console.log(this.locationItems)
      });
      
  }

}
