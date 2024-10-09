import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: { id: number; title: string; author: string; publishedyear: string; quantity:number; }[] = [];
  
  // Properties for new Books
  id: number = 0;
  title: string = '';
  author: string = '';
  publishedyear: string = '';
  quantity: number = 0;

  addBooks() {
    const newBooks = { id: this.id, title: this.title, author: this.author, publishedyear: this.publishedyear, quantity:this.quantity };
    this.books.push(newBooks);
  }
}
