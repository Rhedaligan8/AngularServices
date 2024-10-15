import { Component } from '@angular/core';
import { CourseListService } from '../course-list.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses = [] as CourseListComponent[];
  constructor (private courseListService: CourseListService){
    this.courses = this.courseListService.getCourses();
  }
  course: { id: number; namecourse: string; }[] = [];
  
  // Properties for Add Course in List
  id: number = 0;
  namecourse: string = '';

  addCourse() {
    const newCourse = { id: this.id, namecourse: this.namecourse };
    this.course.push(newCourse);
}
}
