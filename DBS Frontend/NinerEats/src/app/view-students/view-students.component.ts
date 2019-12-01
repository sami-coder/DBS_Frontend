import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageStudentService } from '../manage-student.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  students: any

  constructor(
    private router: Router,
    private getservice: ManageStudentService
  ) { }

  ngOnInit() {
    this.viewStudent();
  }

  viewStudent() {
    this.getservice.getStudents().subscribe(data => {
      console.log(data);
      this.students = data;
    })
  }

  deleteStudent(id) {
    this.getservice.deleteStudent(id).subscribe(data => {
      console.log(data);
    })
  }

  addStudent() {
    this.router.navigate(['add-student']);
  }

}
