import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageStudentService } from '../manage-student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent implements OnInit {

  name:any
  email:any
  cell:any
  graduation_year:any
  body:any
  type:any
  student: Student

  constructor(
    private router: Router,
    private service: ManageStudentService
  ) { }

  ngOnInit() {
  }

  addStudent(){
    this.student = new Student(this.name, this.cell,this.email, this.graduation_year, this.body, this.type);
    console.log(this.student);
    this.service.postStudent(this.student).subscribe(data =>{
      console.log(data)
      this.router.navigate(['view-student']);
      //this.router.navigate(['inventory'],this.restaurant_id)
    })
  }
  addStudentCancel(){
    this.router.navigate(['view-student']);
  }
}
export class Student{
  constructor(
  private name:any,
  private cell:any,
  private email:any,
  private graduation_year:any,
  private body:any,
  private type:any
  ){}
}

