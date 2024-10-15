import { Injectable } from '@angular/core';
import { FruitListComponent } from './fruit-list/fruit-list.component';

@Injectable({
  providedIn: 'root'
})
export class FruitListService {
  private fruit: FruitListComponent[] = [];
  constructor() { }

  fruits: { id: number; name: string; price: number; quantity: number }[] = [];
  
  // Properties for new Employee
  id: number = 0;
  name: string = '';
  price: number = 0;
  quantity: number = 0;

  addFruits() {
    const newFruits = { id: this.id, name: this.name, price: this.price, quantity: this.quantity };
    this.fruits.push(newFruits);
 
  }
  getfruits():FruitListComponent[]{
    return this.fruit;
  }
}
