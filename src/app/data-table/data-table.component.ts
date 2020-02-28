import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alumno, Profesor } from '../models/user.model';
import { UserService } from '../login/user.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild('datatableForm', {static: false}) public datatableForm: NgForm;
  teachers: Profesor[] = [];
  users: any[] = [];
  user: Alumno;
  isLoading = false;
  codeConfirmationEmail = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.users = this.userService.getStudents()
    this.user = new Alumno();
    this.isLoading = true;
    this.userService.getStudents().subscribe(students => {
      this.users = students;
      this.isLoading = false;
    });
    this.userService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    })
  }

  submit() {
    this.userService.postStudent(this.user);
    this.reset();
  }

  reset() {
    this.codeConfirmationEmail = '';
    this.user = new Alumno();
    this.datatableForm.resetForm();
  }

}
