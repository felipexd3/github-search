import {Routes} from '@angular/router';
import {SearchComponentsComponent} from './search-components/search-components.component';
import {UserComponentComponent} from './user-component/user-component.component';

export const componentsRoutes: Routes = [
  {
    path: '',
    component: SearchComponentsComponent
  },
  {
    path: 'user',
    component: UserComponentComponent
  }
];
