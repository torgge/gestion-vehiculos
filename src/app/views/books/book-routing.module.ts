import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';

import { BookComponent } from './book-list/book.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Books'
    },
    children: [
      {
        path: '',
        component: BookComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'detail/:bookId',
        component: BookDetailComponent,
        data: {
          title: 'Detail'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {}
