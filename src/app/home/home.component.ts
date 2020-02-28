import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/user.model';
import { UserService } from '../login/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: Alumno[] = [];
  title = 'curso-febrero';
  variable = {
    name: ''
  };

  constructor(private userService: UserService) {}

  sayHello(element: any) {
    this.variable.name = element.value;
    alert(`Hola ${this.variable.name}`);
  }
}
