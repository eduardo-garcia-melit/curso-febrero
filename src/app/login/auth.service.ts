import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  loginSubject: Subject<boolean> = new Subject<boolean>();
  isLoggedIn = false;
  mockUser = {username: 'eduardo@fake.com', password: '1234'};

  login(username, password): Observable<boolean> {
    return of(username == this.mockUser.username && password == this.mockUser.password).pipe(
      delay(6000),
      tap(val => {
        this.isLoggedIn = val;
        this.loginSubject.next(this.isLoggedIn);
      })
    );
  }

  updateLogin(): Observable<boolean> {
    return this.loginSubject.asObservable();
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loginSubject.next(this.isLoggedIn);
  }
}
