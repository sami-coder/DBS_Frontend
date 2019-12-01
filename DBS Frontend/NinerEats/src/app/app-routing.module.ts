import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentsComponent } from './view-students/view-students.component';


const routes: Routes = [
  {path:'add-student', component:AddStudentComponent},
  {path:'view-student', component:ViewStudentsComponent},
  {path:'**', component:ViewStudentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
