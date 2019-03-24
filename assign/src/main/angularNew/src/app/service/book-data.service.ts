import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';

import { Book } from './../model/book';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class BookDataService {

  apiRoot: string = "http://localhost:8080/api/";

  constructor(private http:HttpClient) { }

  getAllBooks(){
    console.log('BookDataService - getAllBooks');
    return this.http.get<Book[]>(this.apiRoot+'books');
  }

  addNewBook(newBook: Book){
    console.log('BookDataService - addNewBook');
    return this.http.post(this.apiRoot+'book', {id:newBook.id, name: newBook.name,
       rating: newBook.rating});
  }

  getBookById(id){
    console.log('BookDataService - getBookById - id '+id);
    return this.http.get<Book>(this.apiRoot+'book/'+id);
  }

  editBook(book: Book){
    console.log('BookDataService - editBook');
    return this.http.put(this.apiRoot+'book', {id:book.id, name: book.name,
       rating: book.rating});
  }

  deleteBookById(id){
    console.log('BookDataService - deleteBookById - id '+id);
    return this.http.delete(this.apiRoot+'book/'+id);
  }

}
