import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router) { 

  

  }
 student =[];
  ngOnInit() {
   
   this.student =this.studentService.students;
  }

  deleteAll(){
    this.studentService.deleteAll();
  }


  editStudent(rn){
    this.router.navigate(['/student-update',rn]);
  }

  deleteStudent(s){
    this.studentService.deleteStudent(s);
  }

  getStudentAdd(){
    this.router.navigate(['/student-add']);
  }
}
