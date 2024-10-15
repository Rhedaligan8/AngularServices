import { Injectable } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private product: ProductListComponent[]= [];
  constructor() { }
  products: { id: number; name: string; types: string; price:number; quantity:number }[] = [];
  
  // Properties for Add Products
  id: number = 0;
  name: string = '';
  types: string = '';
  price: number = 0;
  quantity: number = 0;

  addProduct() {
    const newProduct = { id: this.id, name: this.name, types: this.types, price: this.price, quantity:this.quantity };
    this.products.push(newProduct);
  }
  getProduct():ProductListComponent[]{
    return this.product;
  }
}
