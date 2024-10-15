import { Component } from '@angular/core';
import { ProductListService } from '../product-list.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product = [] as ProductListComponent [];
  constructor (private ProductService:ProductListService){
    this.products =this.ProductService.getProduct();
  }
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
  