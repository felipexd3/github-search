import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {UserModel} from '../../models/user-model';
import {GithubServiceService} from '../../services/github-service.service';
import {EmitterService} from '../../services/emitters/emitter.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-search-components',
  templateUrl: './search-components.component.html',
  styleUrls: ['./search-components.component.scss']
})
export class SearchComponentsComponent implements OnInit {

  searchForm: FormGroup;
  canSearch = false;
  user: UserModel;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private githubService: GithubServiceService,
              private userEmitterService: EmitterService,
              private spinner: NgxSpinnerService,
              private snackBar: MatSnackBar) {
    this.searchForm = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.onChangesUserForm();
  }

  onChangesUserForm(): Subscription {
    return this.searchForm.valueChanges.subscribe(() => {
      this.canSearch = this.searchForm.valid;
    });
  }

  findClient() {
    this.spinner.show();
    if (!this.searchForm.valid) {
      return false;
    }
    this.githubService.fetchUser(this.searchForm.controls.username.value)
      .subscribe(data => {
        this.userEmitterService.setGithubUser(data);
        this.spinner.hide();
        this.router.navigateByUrl('/user');
      }, error => {
        this.spinner.hide();
        this.snackBar.open( error.status === 404 ? 'Usuário não encontrado' : 'Erro inesperado', '', {
          duration: 2000,
        });
      });
  }

}
