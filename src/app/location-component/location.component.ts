import { TagListComponent } from '../tag-list-component/tag-list.component';
import {
  Component, Input,  OnInit
} from '@angular/core';

import {UserService } from '../services/user.service';

@Component({
  selector: 'location',
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit  {
  @Input() item: any;
  isActive: boolean = true;
  constructor(private userService: UserService) {
    
  }
  ngOnInit() {

  }
  public locationClick(item: any) {
    this.isActive = !this.isActive;
  }

}
