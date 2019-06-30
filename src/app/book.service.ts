import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Book} from './book';


@Injectable()
export class BookService {



  private url = 'http://localhost:40339/api/values/';
  constructor(private http: HttpClient) { }

 getBooks() {
      return this.http.get(this.url);
  }


createBook(book: Book) {
      return this.http.post(this.url, book);
  }
  updateBook(bookid: number, book: Book) {
      const urlParams = new HttpParams().set('bookid', bookid.toString());
      return this.http.put(this.url, book, { params: urlParams});
  }
  deleteBook(bookid: number) {
      return this.http.delete(this.url + '/' + bookid);
  }
}
