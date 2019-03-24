import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { EBook } from './../../model/e-book';
import { EBookDataService } from './../../service/e-book-data.service';

@Component({
  selector: 'app-new-ebook-form',
  templateUrl: './new-ebook-form.component.html',
  styleUrls: ['./new-ebook-form.component.css']
})
export class NewEbookFormComponent implements OnInit {

  eBook: EBook = new EBook();
  
    constructor(private eBookDataService: EBookDataService, 
      private router: Router) { }
  
    ngOnInit() {
    }
  
    addNewEBook(newEBook: EBook){
      console.log('NewEBookFormComponent - addNewEBook');
      this.eBookDataService.addNewEBook(newEBook).subscribe(
        data => { 
          console.log(data);
          this.router.navigate(['eBookTable']);
        },
        error => console.log(error)
     );
    }
  

}

