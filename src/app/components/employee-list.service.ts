import { Injectable } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
    private employees: EmployeeListComponent [] = [];
    constructor() { }
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

  getEmployees ():EmployeeListComponent[]{
    return this.employees;
  }

}
  