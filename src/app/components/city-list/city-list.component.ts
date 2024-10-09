import { Component } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  city: { id: number; Name: string; Brgy: number; Zipcode: number; }[] = [];
  
  // Properties for Add City
  id: number = 0;
  Name: string = '';
  Brgy: number = 0;
  Zipcode: number = 0;

  addCity() {
    const newCity = { id: this.id, Name: this.Name, Brgy: this.Brgy, Zipcode: this.Zipcode };
    this.city.push(newCity);
  }
}
