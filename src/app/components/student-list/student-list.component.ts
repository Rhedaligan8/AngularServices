import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
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
}
