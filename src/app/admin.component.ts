import {TemplateRef, ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {Book} from './book';
import {BookService} from './book.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [BookService]
})


export class AdminComponent implements OnInit {
  // типы шаблонов
  @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>;

  editedBook: Book;
  books: Array<Book>;
  isNewRecord: boolean;
  statusMessage: string;
  condition = true;

  constructor(private serv: BookService) {
    this.books = new Array<Book>();
  }

  ngOnInit() {
    this.loadBooks();
  }


  // загрузка книг
  private loadBooks() {
    this.serv.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }
  // добавление книги
  addBook() {

    this.editedBook = new Book(0, '', '' , '', '', 0);
    this.books.push(this.editedBook);
    this.isNewRecord = true;

  }

  // редактирование книги
  editBook(book: Book) {
  }
  // загружаем один из двух шаблонов
  loadTemplate(book: Book) {
    // tslint:disable-next-line:triple-equals
    if (this.editedBook && this.editedBook.BookId == book.BookId) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  // сохраняем книгу
  saveBook() {
    if (this.isNewRecord) {
      // добавляем книгу
      this.serv.createBook(this.editedBook).subscribe(data => {
        this.statusMessage = 'Данные успешно добавлены',
          this.loadBooks();
      });
      this.isNewRecord = false;
      this.editedBook = null;
    } else {
      // изменяем книгу
      this.serv.updateBook(this.editedBook.BookId, this.editedBook).subscribe(data => {
        this.statusMessage = 'Данные успешно обновлены',
          this.loadBooks();
      });
      this.editedBook = null;
    }
  }
  // отмена редактирования
  cancel() {
    // если отмена при добавлении, удаляем последнюю запись;
    if (this.isNewRecord) {
      this.books.pop();
      this.isNewRecord = false;
    }
    this.editedBook = null;
  }
  // удаление книги
  deleteBook(book: Book) {
    this.serv.deleteBook(book.BookId).subscribe(data => {
      this.statusMessage = 'Данные успешно удалены',
        this.loadBooks();
    });
  }
}
