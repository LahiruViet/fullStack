import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';

import { EBook } from './../model/e-book';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class EBookDataService {

  apiRoot: string = "http://localhost:8080/api/";
  
    constructor(private http:HttpClient) { }
  
    getAllEBooks(){
      console.log('EBookDataService - getAllEBooks');
      return this.http.get<EBook[]>(this.apiRoot+'ebooks');
    }
  
    addNewEBook(newEBook: EBook){
      console.log('EBookDataService - addNewEBook');
      return this.http.post<EBook>(this.apiRoot+'ebook', {id:newEBook.id, name: newEBook.name,
         rating: newEBook.rating, email: newEBook.email});
    }
  
    getEBookById(id){
      console.log('EBookDataService - getEBookById - id '+id);
      return this.http.get<EBook>(this.apiRoot+'ebook/'+id);
    }
  
    editEBook(eBook: EBook){
      console.log('EBookDataService - editEBook');
      return this.http.put<EBook>(this.apiRoot+'ebook', {id:eBook.id, name: eBook.name,
         rating: eBook.rating, email: eBook.email});
    }
  
    deleteEBookById(id){
      console.log('EBookDataService - deleteEBookById - id '+id);
      return this.http.delete(this.apiRoot+'ebook/'+id);
    }
  
}

