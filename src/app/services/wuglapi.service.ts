import {
  Injectable
} from '@angular/core';

import {
  OnInit
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {
  Observable
} from 'rxjs'


@Injectable()
export class WuglapiService implements OnInit {

  constructor(private http: Http) {}

  ngOnInit() {
    
  }


  getLocations(): Observable < any > {

    return this.http.get("http://localhost:3000/location")
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getTags(regionId: String): Observable < any > {

    return this.http.get("http://localhost:3000/tag?regionID=" + regionId)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getCities(): Observable < any > {
    
        return this.http.get("http://localhost:3000/city")
          // ...and calling .json() on the response to return data
          .map((res: Response) => res.json())
          //...errors if any
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    
      }
    
  createTag(data: any) {
    this.http.post("http://localhost:3000/tag", data).subscribe(
      data => {
        //alert('ok');
      },
      error => {
        //console.log(JSON.stringify(error.json()));
      }
    )
  }

  createUser(data: any){
    this.http.post("http://localhost:3000/user/create", data).subscribe(
      data => {
        //alert('ok');
      },
      error => {
        //console.log(JSON.stringify(error.json()));
      }
    )
  }

  setUserLocation(data: any){
    this.http.post("http://localhost:3000/user/setlocation", data).subscribe(
      data => {
        //alert('ok');
      },
      error => {
        //console.log(JSON.stringify(error.json()));
      }
    )
  }

  checkUserExists(userID: String) : Observable < any > {
    
        return this.http.get("http://localhost:3000/user?userID=" + userID)
          // ...and calling .json() on the response to return data
          .map((res: Response) => res.json())
          //...errors if any
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    
      }
}
