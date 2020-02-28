import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  login(){
    this.isLoading = true;
    this.authService.login(this.username, this.password).subscribe(success => {
      this.isLoading = false;
      if (success && this.authService.redirectUrl) {
        this.router.navigate([this.authService.redirectUrl]);
        this.authService.redirectUrl = null;
      }
      else if (success) this.router.navigate(['home']);
      else {
        alert('Usuario o contraseña erróneos');
        this.username = '';
        this.password = '';
      }
    });
  }
}
