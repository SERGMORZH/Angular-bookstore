import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Book} from './books';

@Injectable()
export class BooksService {

  private url = 'http://localhost:40339/api/values/';
  constructor(private http: HttpClient) { }

  getBook() {
    return this.http.get(this.url);
  }

  createBook(boo: Book) {
    return this.http.post(this.url, Book);
  }
  updateBook(bookid: number, bookcontent: Book) {
    const urlParams = new HttpParams().set('id', bookid.toString());
    return this.http.put(this.url, Book, { params: urlParams});
  }
  deleteBook(bookid: number) {
    return this.http.delete(this.url + '/' + bookid);
  }
}
