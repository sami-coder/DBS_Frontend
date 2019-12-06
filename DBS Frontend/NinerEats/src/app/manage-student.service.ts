import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './add-student/add-student.component';


@Injectable({
  providedIn: 'root'
})
export class ManageStudentService {

  constructor(
    private httpClient:HttpClient

  ) { }

  getStudents(){
    console.log();
    return this.httpClient.get<Student[]>( `http://localhost:5001/getstudents`);
  }

  postStudent(student){
    console.log(student);
    return this.httpClient.post(`http://localhost:5001/postStudent`,student);
  }

  deleteStudent(id){
    console.log(id);
    return this.httpClient.delete( `http://localhost:5001/deletestudent`+id);
  }
  putStudent(student){
    console.log(student);
    return this.httpClient.put(`http://localhost:5001/putStudent`,student);
  }

  getSingleStudent(id){
    return this.httpClient.get( `http://localhost:5001/getsinglestudents`,id);
  }

  putSingleStudent(student){
    return this.httpClient.post(`http://localhost:5001/postSingleStudent`,student);
  }
}
