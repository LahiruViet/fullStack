import { Component, OnInit } from '@angular/core';
import { Book } from './../../model/book';
import { BookDataService } from './../../service/book-data.service';
import { Router } from '@angular/router';
import { SharedDataService } from './../../service/shared-data.service';

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.css']
})
export class EditBookFormComponent implements OnInit {

  book: Book = new Book();

  constructor(private bookDataService: BookDataService, 
    private router: Router, private sharedDataService: SharedDataService) { 
      console.log('EditBookFormComponent - constructor');
      this.book = this.sharedDataService.book;
    }

  ngOnInit() {
  }

  editBook(editedBook){
    console.log('EditBookFormComponent - editBook');
    this.bookDataService.editBook(editedBook).subscribe(
      data => { 
        console.log('editBook - success');
        console.log(data);console.log('editBook - success');
        this.router.navigate(['']);
      },
      error => {
        console.log('editBook - failure');
        console.log(error);
      }
   );
  }

}
