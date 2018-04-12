import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here


import { MainContainerComponent } from './main-container/main-container.component';
import { appRoutes } from './routes';
import { MainSectionComponent } from './main-section/main-section.component';
import { LocationsListComponent } from './locations-list-component/locations-list.component';
import { LocationComponent } from './location-component/location.component';
import { LoginComponent } from './login-component/login.component';
import { HeaderComponent } from './header-component/header.component';
import { FacebookModule } from 'ngx-facebook';
import { LoginRouteGuard } from './guards/login-guard';
import { UserService } from './services/user.service';
import { WuglapiService } from './services/wuglapi.service';
import { TagListComponent } from './tag-list-component/tag-list.component';
import { ChooseLocationComponent } from './choose-location-component/choose-location.component';
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes), FacebookModule.forRoot() ],
  declarations: [ AppComponent, MainContainerComponent, MainSectionComponent, LocationsListComponent, 
    LocationComponent,LoginComponent, HeaderComponent,TagListComponent,ChooseLocationComponent],
  bootstrap:    [ AppComponent ],
  providers: [LoginRouteGuard, LoginComponent, UserService, WuglapiService ]
})
export class AppModule { }
