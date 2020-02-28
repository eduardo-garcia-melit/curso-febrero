import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Alumno[] = [];
  title = 'curso-febrero';
  variable = {
    nombre: ''
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
    /*this.userService.getStudents().subscribe(students => {
      this.users = students;
    });*/
  }

  sayHello(element: any) {
    this.variable.nombre = element.value;
    alert(`Hola ${this.variable.nombre}`);
  }
}
