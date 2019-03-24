import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BookDataService } from './../../service/book-data.service';
import { SharedDataService } from './../../service/shared-data.service';
import { Router } from '@angular/router';

import { Book } from './../../model/book';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css'],
})
export class BookTableComponent implements OnInit {

  books: any[];
  columns: string[];

  constructor(private bookDataService: BookDataService, 
    private sharedDataService : SharedDataService, private router: Router) { }

  ngOnInit() {
    console.log('BookTableComponent - ngOnInit');
    this.getBooks();
  }

  getBooks(){
    this.bookDataService.getAllBooks().subscribe(
      data => { 
        console.log(data);
        this.books = data;
        //this.books = data['commonResponseMap']['allBooksArray'];
      },
      error => console.log(error)
   );
  }

  getBookById(id){
    console.log('BookTableComponent - getBookById');
    this.bookDataService.getBookById(id).subscribe(
      data => { 
        console.log(data);
        this.sharedDataService.book = data;
        this.router.navigate(['editBookForm']);
      },
      error => console.log(error)
   );
  }

  deleteBookById(id){
    console.log('BookTableComponent - deleteBookById');
    this.bookDataService.deleteBookById(id).subscribe(
      data => { 
        console.log(data);
        this.getBooks();
      },
      error => { 
        console.log('data');
        this.getBooks();
      }
   );
  }

  routeToAddNewBookForm(){
    this.router.navigate(['newBookForm']);
  }

}
