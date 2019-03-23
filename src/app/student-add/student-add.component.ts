import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit() {
  }


  student = { rn:0, birthdate : '',  firstName: '', lastName: '',  parentName: '',  parentPhone : '' , address:'' }
  
  studentAdd(student){

    this.studentService.studentAdd(student);
    this.student = { rn:0, birthdate : '',  firstName: '', lastName: '',  parentName: '',  parentPhone : '' , address:'' }
     
    this.router.navigate(['/student-list']);
  }


}
