import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})





export class StudentService {
  constructor() { }
  students = [
    {
      rn:1,
      birthdate : '12/12/1989',
      firstName: 'John',
      lastName: 'Doe',
      parentName: 'John Father',
      parentPhone : '03284923823' ,
      address:'Austaralia' 
    }, {
      rn:2,
      birthdate : '22/8/1948',
      firstName: 'Mohan',
      lastName: 'Das',
      parentName: 'Mohan Father',
      parentPhone : '918343893499' ,
      address:'India' 
    },
  ]

student =[];

// Delete All students

deleteAll(){
  this.students.length=0;
}

// Delete each student

 deleteStudent(s){
   for(var i=0;i<this.students.length;i++){
     if(s.rn == this.students[i].rn){
      this.students.splice(i,1);
     }
   }
 }

 studentAdd(student){
   student.rn = Math.round(Math.random()*100000);
   this.students.push(student);

}
getStudentByRn(rn){
  for(var i=0;i<this.students.length;i++){
    if(rn==this.students[i].rn){
      return this.students[i];
    }
  }
}
updateStudent(student){
  for(var i =0;i<this.students.length;i++){
    if(student.rn==this.students[i].rn){
      this.students[i]=student;
    }
  }
}
 
   

 
}
