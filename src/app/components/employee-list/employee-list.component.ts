import { Component } from '@angular/core';
import { EmployeeListService } from '../employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  constructor (private EmployeeListService:EmployeeListService){
    this.employee = this.EmployeeListService.getEmployees();
  }
  employee: { id: number; name: string; age: number; position: string }[] = [];
  
  // Properties for new Employee
  id: number = 0;
  name: string = '';
  age: number = 0;
  position: string = '';

  addEmployee() {
    const newEmployee = { id: this.id, name: this.name, age: this.age, position: this.position };
    this.employee.push(newEmployee);
  }
}
