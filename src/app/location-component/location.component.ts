import {
  TagListComponent
} from '../tag-list-component/tag-list.component';
import {
  Component,
  Input,
  OnInit
} from '@angular/core';


import {
  WuglapiService
} from '../services/wuglapi.service';
import {
  Observable
} from 'rxjs'
@Component({
  selector: 'location',
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {
  @Input() item: any;
  @Input() tags: any;
 
  private tagsList: Array<any>
  private locationID = "@";

  isActive: boolean = false;
  constructor(private wuglapiService: WuglapiService) {}

  ngOnInit() {
    this.locationID = this.item.locationID;
    this.tagsList = this.tags.filter((tag : any) => {
      return (tag.locationID === this.item.id);
    })
    
  }
  public locationClick(item: any) {

    var data = {
      date: < string > '10/10/17',
      userID: < string > '1001',
      locationID: < string > '1002',
    };
    this.wuglapiService.createTag(data);
  }

}
