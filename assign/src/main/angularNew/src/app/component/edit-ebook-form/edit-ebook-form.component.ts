import { Component, OnInit } from '@angular/core';
import { EBook } from './../../model/e-book';
import { EBookDataService } from './../../service/e-book-data.service';
import { Router } from '@angular/router';
import { SharedDataService } from './../../service/shared-data.service';

@Component({
  selector: 'app-edit-ebook-form',
  templateUrl: './edit-ebook-form.component.html',
  styleUrls: ['./edit-ebook-form.component.css']
})
export class EditEbookFormComponent implements OnInit {

  eBook: EBook = new EBook();
  
    constructor(private eBookDataService: EBookDataService, 
      private router: Router, private sharedDataService: SharedDataService) { 
        console.log('EditEBookFormComponent - constructor');
        this.eBook = this.sharedDataService.eBook;
      }
  
    ngOnInit() {
    }
  
    editEBook(editedEBook){
      console.log('EditEBookFormComponent - editEBook');
      this.eBookDataService.editEBook(editedEBook).subscribe(
        data => { 
          this.router.navigate(['eBookTable']);
        },
        error => {
          console.log(error);
        }
     );
    }

}

