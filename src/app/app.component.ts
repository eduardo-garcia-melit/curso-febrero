import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso Febrero';
  subscription: Subscription;
  isLoggedIn = this.authService.isLoggedIn;

  constructor(private authService: AuthService, private router: Router){
    this.subscription = this.authService.updateLogin().subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
