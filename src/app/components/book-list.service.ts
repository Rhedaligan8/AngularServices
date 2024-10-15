import { Injectable } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
@Injectable({
  providedIn: 'root'
})
export class BookListService {
  private book: BookListComponent[] =[];;
  constructor() {}
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
  getBook():BookListComponent[]{
    return this.book;
  }
}
