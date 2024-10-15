import { Injectable } from '@angular/core';
import { CarmodelListComponent } from './carmodel-list/carmodel-list.component';
@Injectable({
  providedIn: 'root'
})
export class CarmodelListService {
  private carmodels: CarmodelListComponent[] =[];
  constructor() { }
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
 getCarModel():CarmodelListComponent[]{
  return this.carmodels;
 }
}
