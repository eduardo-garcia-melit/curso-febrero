import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url) {
    if (this.authService.isLoggedIn) return of(true);

    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return of(false);
  }
  
}
