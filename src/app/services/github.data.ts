import {Observable} from 'rxjs';
import {UserModel} from '../models/user-model';
import {RepositoryModel} from '../models/repository-model';
import {StarredModel} from '../models/starred-model';

export abstract class GithubData {
  abstract fetchUser(username: string): Observable<UserModel>;
  abstract fetchRepos(username: string): Observable<RepositoryModel[]>;
  abstract fetchStarred(username: string): Observable<StarredModel[]>;
}
