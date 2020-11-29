import {Routes} from '@angular/router';
import {SearchComponentsComponent} from './search-components/search-components.component';
import {UserComponentComponent} from './user-component/user-component.component';
import {UserGuardService} from '../guard/user-guard.service';

export const componentsRoutes: Routes = [
  {
    path: '',
    component: SearchComponentsComponent
  },
  {
    path: 'user/:username',
    component: UserComponentComponent,
    canActivate: [UserGuardService]
  }
];
