import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


const routes: Routes = [
  {path:'add-student', component:AddStudentComponent},
  {path:'view-student', component:ViewStudentsComponent},
  {path:'update-student', component:UpdateStudentComponent},
  {path:'**', component:ViewStudentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
