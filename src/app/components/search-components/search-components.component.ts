import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../models/user-model';

@Component({
  selector: 'app-search-components',
  templateUrl: './search-components.component.html',
  styleUrls: ['./search-components.component.scss']
})
export class SearchComponentsComponent {

  searchForm: FormGroup;
  user: UserModel;

  constructor(private router: Router,
              private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  async findClient() {
    await this.router.navigateByUrl(`/user/${this.username}`);
  }

  get isFormValid() {
    return this.searchForm.valid;
  }

  get username() {
    return this.searchForm.controls.username.value;
  }
}
