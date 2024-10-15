import { Injectable } from '@angular/core';
import  {StudentListComponent}  from './student-list/student-list.component';
@Injectable({
  providedIn: 'root'
})
export class StudentListService {
    private student:StudentListComponent[]=[];
    students: { id: number; name: string; age: number; course: string }[] = [];
  
    // Properties for new student
    id: number = 0;
    name: string = '';
    age: number = 0;
    course: string = '';
  
    addStudent() {
      const newStudent = { id: this.id, name: this.name, age: this.age, course: this.course };
      this.students.push(newStudent);
    }
    getStudent():StudentListComponent[]{
      return  this.student;
    }

  constructor() { }
}
