import { Injectable } from '@angular/core';
import { Alumno, Profesor } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private students: Alumno[] = environment.complexStudents ? [
    {
      name: 'Eduardo',
      surnames: 'García',
      email: 'eduardo@garcia.com',
      edad: 25
    },
    {
      name: 'Peter',
      surnames: 'Parker',
      email: 'spider@man.com',
      edad: 19
    }
  ] : 
  [
    {
      name: 'Eduardo',
      surnames: 'García',
      email: 'eduardo@garcia.com'
    },
    {
      name: 'Peter',
      surnames: 'Parker',
      email: 'spider@man.com'
    }
  ];

  private teachers: Profesor[] = [
    {
      name: 'Pepe',
      surnames: 'García',
      email: 'eduardo@garcia.com',
      edad: 25
    },
    {
      name: 'Matt',
      surnames: 'Murdock',
      email: 'spider@man.com',
      edad: 19
    }
  ];


  constructor(private http: HttpClient) { }

  getStudents(): Observable<Alumno[]> {
    return of(this.students);
  }

  postStudent(student: Alumno) {
    this.students.push(student);
  }

  getTeachers(): Observable<Profesor[]> {
    return of(this.teachers);
  }

  postTeacher(teacher: Profesor) {
    this.teachers.push(teacher);
  }
}
