import { Component } from '@angular/core';
import { CarmodelListService } from '../carmodel-list.service';

@Component({
  selector: 'app-carmodel-list',
  templateUrl: './carmodel-list.component.html',
  styleUrl: './carmodel-list.component.css'
})
export class CarmodelListComponent {
  carmodels = [] as CarmodelListComponent [];
  constructor(private carModelService: CarmodelListService){
      this.carmodels = this.carModelService.getCarModel();
  }
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
