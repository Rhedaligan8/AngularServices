import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
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
}
  