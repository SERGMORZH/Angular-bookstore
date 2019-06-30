import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Book} from './book';
import {BookmService} from './bookm.service';


@Component({
  selector: 'app-book',
  templateUrl: './bookm.component.html',
  providers: [BookmService]
})

export class BookmComponent implements OnInit {
  // типы шаблонов
  @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>;

  editedBook: Book;
  books: Array<Book>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private serv: BookmService) {
    this.books = new Array<Book>();
    console.log( );
  }

  ngOnInit() {
    this.loadBooks();
  }

  // загрузка книг
 public loadBooks() {
    this.serv.getBooks().subscribe((data: Book[]) => {
      this.books = data;
       });
  }}
