import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Book } from './../../model/book';
import { BookDataService } from './../../service/book-data.service';

@Component({
  selector: 'app-new-book-form',
  templateUrl: './new-book-form.component.html',
  styleUrls: ['./new-book-form.component.css'],
})
export class NewBookFormComponent implements OnInit {

  book: Book = new Book();

  constructor(private bookDataService: BookDataService, 
    private router: Router) { }

  ngOnInit() {
  }

  addNewBook(newBook: Book){
    console.log('NewBookFormComponent - addNewBook');
    this.bookDataService.addNewBook(newBook).subscribe(
      data => { 
        console.log('got------------');
        console.log(data);
        this.router.navigate(['']);
        console.log('after route');
      },
      error => console.log(error)
   );
  }

}
