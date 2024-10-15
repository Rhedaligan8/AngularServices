import { Injectable } from '@angular/core';
import { SubjectListComponent } from './subject-list/subject-list.component';
@Injectable({
  providedIn: 'root'
})
export class SubjectListService {
  private Subjects: SubjectListComponent [] = [];

  constructor() { }
  subject: { name: string; professor: string; schedule: Date; unit:number; }[] = [];
  
  // Properties for Add Car Model
  name: string = '';
  professor: string = '';
  schedule: Date = new Date (2024,9,9);
  unit: number = 0;


  addSubject() {
    const newSubject = { name: this.name, professor: this.professor, schedule: this.schedule, unit: this.unit };
    this.subject.push(newSubject);
}
  getSubject():SubjectListComponent[]{
    return this.Subjects;
  }
}
