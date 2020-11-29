import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from './user-component/user-component.component';
import { SearchComponentsComponent } from './search-components/search-components.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatTreeModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {componentsRoutes} from './component.routes';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [UserComponentComponent, SearchComponentsComponent],
  imports: [
    RouterModule.forChild(componentsRoutes),
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTreeModule,
    MatListModule,
    NgxSpinnerModule,
  ]
})
export class ComponentsModule { }
