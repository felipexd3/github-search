import { Injectable } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner: NgxSpinnerService) { }

  async show() {
    await this.spinner.show();
  }

  async hide() {
    await this.spinner.hide();
  }
}
