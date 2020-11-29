import { Injectable } from '@angular/core';
import {GithubData} from './github.data';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user-model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {RepositoryModel} from '../models/repository-model';
import {StarredModel} from '../models/starred-model';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService implements GithubData {

  baseUrl = environment.urls.github;

  constructor(private http: HttpClient) { }

  fetchUser(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}/${username}`);
  }

  fetchRepos(username: string): Observable<RepositoryModel[]> {
    return this.http.get<RepositoryModel[]>(`${this.baseUrl}/${username}/repos`);
  }

  fetchStarred(username: string): Observable<StarredModel[]> {
    return this.http.get<RepositoryModel[]>(`${this.baseUrl}/${username}/starred`);
  }
}
