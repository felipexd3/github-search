import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../models/user-model';
import {GithubServiceService} from '../../services/github-service.service';
import {RepositoryModel} from '../../models/repository-model';
import {StarredModel} from '../../models/starred-model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {

  user: UserModel;
  repository: RepositoryModel[];
  isSearchRepos: boolean;
  starred: StarredModel[];

  constructor(private githubService: GithubServiceService,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = this.router.snapshot.data as UserModel;
  }


  searchRepos() {
    this.isSearchRepos = true;
    this.githubService.fetchRepos(this.user.login).subscribe(data => {
      this.repository = data;
    });
  }

  searchStarred() {
    this.isSearchRepos = false;
    this.githubService.fetchStarred(this.user.login).subscribe(data => {
      this.starred = data;
    });
  }

  redirectTo(url: string) {
    window.open(url, '_blank');
  }
}
