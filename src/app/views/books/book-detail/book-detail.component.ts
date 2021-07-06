import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../../shared/models/book.model";
import {ApiService} from "../../../shared/services/api.service";
import firebase from "firebase";
import Error = firebase.auth.Error;

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
  books = this.service.getBooksObs;
  selectedBook: Book | undefined
  alertsDismiss: any = [];

  constructor(
    private readonly service: ApiService,
    private readonly route: ActivatedRoute
  ) {
  }

  async ngOnInit(): Promise<void> {

    const routerParam = this.route.snapshot.paramMap
    const bookIdFromRoute = (routerParam.get('bookId') === 'new')
      ? null
      : routerParam.get('bookId')

    this.selectedBook = {book_id: undefined, title: "New Book", active: true, author_id: "341ac648-c509-4950-bcdf-e19f0422f804"};

    if (bookIdFromRoute) {
      this.books.subscribe(b => {
        this.selectedBook = b.find(bid => bid.book_id === bookIdFromRoute)
      })
    }

  }

  async saveBook(book: Book) {
    const result = await (book.book_id)
      ? this.service.update(book)
      : this.service.addBook(book)

    result.then(r => {
      const bs: Book[] = (r.data) ? r.data : [];

      (r.error)
        ? this.showError(r.error)
        : this.showSuccess(bs[0])
    })

  }

  private showError(e: Error) {
    this.alertsDismiss.push({
      type: 'danger',
      msg: e.message,
      timeout: 2000
    });
  }

  private showSuccess(data: Book) {
    this.alertsDismiss.push({
      type: 'info',
      msg: `Book ${data.book_id} saved!`,
      timeout: 2000
    });
  }

}
