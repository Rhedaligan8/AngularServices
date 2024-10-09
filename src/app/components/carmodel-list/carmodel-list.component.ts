import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodel-list',
  templateUrl: './carmodel-list.component.html',
  styleUrl: './carmodel-list.component.css'
})
export class CarmodelListComponent {
  carmodel: { id: number; types: string; brand: string; model:string; year:number }[] = [];
  
  // Properties for Add Car Model
  id: number = 0;
  types: string = '';
  brand: string = '';
  model: string = '';
  year: number = 0;

  addCarModel() {
    const newMovie = { id: this.id, types: this.types, brand: this.brand, model: this.model, year:this.year };
    this.carmodel.push(newMovie);
  }
}
