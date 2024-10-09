import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  course: { id: number; namecourse: string; }[] = [];
  
  // Properties for Add Course in List
  id: number = 0;
  namecourse: string = '';

  addCourse() {
    const newCourse = { id: this.id, namecourse: this.namecourse };
    this.course.push(newCourse);
}
}
