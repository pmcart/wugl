import { Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { LoginComponent } from './login-component/login.component';
import { ChooseLocationComponent } from './choose-location-component/choose-location.component';
import { LoginRouteGuard } from './guards/login-guard';

export const appRoutingProviders: any[] = [];
export const appRoutes: Routes = [
  { path: 'home', component: MainSectionComponent, canActivate: [LoginRouteGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'choose-location', component: ChooseLocationComponent, canActivate: [LoginRouteGuard] },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

];