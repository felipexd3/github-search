import {EventEmitter, Injectable} from '@angular/core';
import {UserModel} from '../../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  userEmitt = new EventEmitter<UserModel>();
  private user: UserModel;

  constructor() { }

  getGithubUser() {
    return this.user;
  }

  setGithubUser(user: UserModel) {
    this.user = user;
    this.userEmitt.emit(user);
  }
}
