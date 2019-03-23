import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
 
  constructor(private studentService:StudentService,private router:Router,private route:ActivatedRoute) { }
  rn:number;
  private sub:any;
  student:any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params=>{
      this.rn = +params['rn'];
      this.student = this.studentService.getStudentByRn(this.rn);
    })
   
  }
  update(student){
    this.studentService.updateStudent(student);
    this.router.navigate(['/student-list']);
  }
  
 



 
  // student = { rn:0, birthdate : '',  firstName: '', lastName: '',  parentName: '',  parentPhone : '' , address:'' }
  
  // studentAdd(student){

  //   this.studentService.studentAdd(student);
  //   this.student = { rn:0, birthdate : '',  firstName: '', lastName: '',  parentName: '',  parentPhone : '' , address:'' }
  //   console.log("asdsd");
  //   this.router.navigate(['/student-list']);
  // }


}
