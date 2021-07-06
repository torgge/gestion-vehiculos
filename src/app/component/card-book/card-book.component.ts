import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Book} from "../../shared/models/book.model";

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html'
})
export class CardBookComponent implements OnInit {
  private _book: Book = {book_id: "", title: "", active: true, author_id: ""};

  @Input() routeToNavigate: String|undefined
  @Input() set book(value: Book) {
    this._book = value;
  }

  get book(): Book {
    return this._book;
  }

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  showDetail(book: Book) {
    const bookId = book ? book.book_id : null
    this.router.navigate([this.routeToNavigate,bookId])
  }
}
