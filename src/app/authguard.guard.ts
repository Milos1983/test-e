import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(
    private user: UserService,
    private _router: Router,
    ) { }

  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.user.getUserLoggedIn()) {
        return true;
      } else {
        this._router.navigate(['login']);
        return false;
      } 
    }
}