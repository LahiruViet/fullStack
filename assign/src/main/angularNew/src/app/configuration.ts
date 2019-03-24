import { RouterModule, Routes } from '@angular/router'

import { NewBookFormComponent } from './component/new-book-form/new-book-form.component';
import { NewEbookFormComponent } from './component/new-ebook-form/new-ebook-form.component';
import { BookTableComponent } from './component/book-table/book-table.component';
import { EditBookFormComponent } from './component/edit-book-form/edit-book-form.component';
import { EBookTableComponent } from './component/e-book-table/e-book-table.component';
import { EditEbookFormComponent } from './component/edit-ebook-form/edit-ebook-form.component';

export const routes: Routes = [

   { path: '', component: BookTableComponent },
   { path: 'newBookForm', component: NewBookFormComponent },
   { path: 'editBookForm', component: EditBookFormComponent },
   { path: 'eBookTable', component: EBookTableComponent },
   { path: 'newEBookForm', component: NewEbookFormComponent },
   { path: 'editEBookForm', component: EditEbookFormComponent },


]

//export const baseUrl = "http://localhost:8080/api/";
// export const baseUrl = "http://localhost:8080/cms/api/";




