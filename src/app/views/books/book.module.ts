import {NgModule} from '@angular/core';

import {BookComponent} from './book-list/book.component';
import {BookRoutingModule} from './book-routing.module';
import {CommonModule} from "@angular/common";
import {ApiService} from "../../shared/services/api.service";
import {AuthorService} from "../../shared/services/author.service";
import {CardBookComponent, CollapsesComponent, FormBookComponent, FormModalComponent} from "../../component";
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {AlertModule} from "ngx-bootstrap/alert";

@NgModule({
  imports: [
    BookRoutingModule,
    CommonModule,
    CollapseModule.forRoot(),
    AlertModule,
  ],
  declarations: [
    BookDetailComponent,
    BookComponent,
    CardBookComponent,
    FormBookComponent,
    CollapsesComponent,
    FormModalComponent
    ],
  providers: [ApiService, AuthorService]
})
export class BookModule {
}
