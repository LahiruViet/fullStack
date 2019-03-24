import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EBookDataService } from './../../service/e-book-data.service';
import { SharedDataService } from './../../service/shared-data.service';
import { Router } from '@angular/router';

import { EBook } from './../../model/e-book';

@Component({
  selector: 'app-e-book-table',
  templateUrl: './e-book-table.component.html',
  styleUrls: ['./e-book-table.component.css']
})
export class EBookTableComponent implements OnInit {

  eBooks: any[];

  constructor(private eBookDataService: EBookDataService, 
    private sharedDataService : SharedDataService, private router: Router) { }

  ngOnInit() {
    console.log('EBookTableComponent - ngOnInit');
    this.getEBooks();
  }

  getEBooks(){
    this.eBookDataService.getAllEBooks().subscribe(
      data => { 
        console.log(data);
        this.eBooks = data;
      },
      error => console.log(error)
   );
  }

  getEBookById(id){
    console.log('EBookTableComponent - getEBookById');
    this.eBookDataService.getEBookById(id).subscribe(
      data => { 
        console.log(data);
        this.sharedDataService.eBook = data;
        this.router.navigate(['editEBookForm']);
      },
      error => console.log(error)
   );
  }

  deleteEBookById(id){
    console.log('EBookTableComponent - deleteEBookById');
    this.eBookDataService.deleteEBookById(id).subscribe(
      data => { 
        console.log(data);
        this.getEBooks();
      },
      error => { 
        console.log('data');
        this.getEBooks();
      }
   );
  }

  routeToAddNewEBookForm(){
    this.router.navigate(['newEBookForm']);
  }

}



