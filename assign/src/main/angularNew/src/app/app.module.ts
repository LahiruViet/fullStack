import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';


import { AppComponent } from './app.component';
import { BookTableComponent } from './component/book-table/book-table.component';
import { EBookTableComponent } from './component/e-book-table/e-book-table.component';
import { NewBookFormComponent } from './component/new-book-form/new-book-form.component';
import { EditBookFormComponent } from './component/edit-book-form/edit-book-form.component';
import { EditEbookFormComponent } from './component/edit-ebook-form/edit-ebook-form.component';
import { NewEbookFormComponent } from './component/new-ebook-form/new-ebook-form.component';

import { SharedDataService } from './service/shared-data.service';
import { BookDataService } from './service/book-data.service';
import { EBookDataService } from './service/e-book-data.service';


import { routes } from './configuration';

import { Book } from './../app/model/book';

@NgModule({
  declarations: [
    AppComponent,
    BookTableComponent,
    EBookTableComponent,
    NewBookFormComponent,
    EditBookFormComponent,
    EditEbookFormComponent,
    NewEbookFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
    FormsModule,
  ],
  providers: [SharedDataService, BookDataService, EBookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
