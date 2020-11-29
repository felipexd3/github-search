import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestInterceptors} from './request-interceptors';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    RequestInterceptors,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptors,
      multi: true
    }
  ]
})
export class InterceptorModule { }
