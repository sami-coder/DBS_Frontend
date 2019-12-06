import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageStudentService } from '../manage-student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id: any
  name: any
  email: any
  cell: any
  graduation_year: any
  body: any
  type: any
  student: Student
  student1: any
  studentid: Studenyid

  constructor(
    private router: Router,
    private service: ManageStudentService
  ) { }

  ngOnInit() {
    this.id=sessionStorage.getItem('updateStudent');
    this.studentid = new Studenyid(this.id);
    this.service.getSingleStudent(this.studentid).subscribe(data => {
      this.student1 = data;
      this.email = this.student1.email;
      this.cell = this.student1.cell;
      this.graduation_year = this.student1.graduation_year;
      this.body = this.student1.body;
      this.type = this.student1.type;
    })
  }

  updateStudent(id) {
    sessionStorage.setItem('updateStudent',id);

    this.student = new Student(this.id, this.name, this.cell, this.email, this.graduation_year, this.body, this.type);
    console.log(this.student);
    this.service.putSingleStudent(this.student).subscribe(data => {
      console.log(data)
      this.router.navigate(['view-student']);
      //this.router.navigate(['inventory'],this.restaurant_id)
    })

  }

  updateStudentCancel() {
    this.router.navigate(['view-student']);
  }

}
export class Student {
  constructor(
    private id: any,
    private name: any,
    private cell: any,
    private email: any,
    private graduation_year: any,
    private body: any,
    private type: any
  ) { }
}
export class Studenyid{
  constructor(
    private id:any
  ){}
}