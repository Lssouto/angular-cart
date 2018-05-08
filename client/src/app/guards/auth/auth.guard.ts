import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private AuthService : AuthService, private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const isUserLoggedIn = this.AuthService.getIsUserLoggedIn();
      if(!isUserLoggedIn)
        this.router.navigate(['login'])
      return isUserLoggedIn;
  }
}
