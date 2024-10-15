import { Injectable } from '@angular/core';
import { CourseListComponent } from './course-list/course-list.component';
@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  private Courses: CourseListComponent[] =[];
  constructor() { }
  course: { id: number; namecourse: string; }[] = [];
  
  // Properties for Add Course in List
  id: number = 0;
  namecourse: string = '';

  addCourse() {
    const newCourse = { id: this.id, namecourse: this.namecourse };
    this.course.push(newCourse);
}
 getCourses(): CourseListComponent[]{
  return this.Courses;
 }
}
