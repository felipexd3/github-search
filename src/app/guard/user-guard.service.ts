import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {GithubServiceService} from '../services/github-service.service';
import {catchError, map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class UserGuardService implements CanActivate {

  canPass = true;

  constructor(private githubService: GithubServiceService,
              private snackBar: MatSnackBar,
              private route: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const {username} = route.params;
    return new Observable<boolean>(obs => {
      this.githubService.fetchUser(username).pipe(
        map(user => {
          obs.next(true);
          return route.data = user;
        }),
        catchError(err => {
          const error = err.status === 404 ? 'Usuário não encontrado' : 'Erro inesperado';
          obs.next(false);
          this.snackBar.open(error, '', {
            duration: 2000,
          });
          return of(this.route.navigateByUrl('/'));
        })
      ).subscribe();
    });
  }
}
