import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {StudentAddComponent} from './student-add/student-add.component';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentUpdateComponent} from './student-update/student-update.component';

const routes: Routes = [
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'student-add',
    component:StudentAddComponent
  },
  {
    path:'student-list',
    component:StudentListComponent
  },
  {
    path:'student-update/:rn',
    component:StudentUpdateComponent
  },
  {
    path:'',
    redirectTo:'/student',
    pathMatch:'full'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
