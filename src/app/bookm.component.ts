import {Component, OnInit} from '@angular/core';
import {Book} from './book';
import {BookService} from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  providers: [BookService]
})
export class Book0Component
constructor(private serv: BookService) {
  this.books = new Array<Book>();
}

ngOnInit() {
  this.loadBooks();
}
