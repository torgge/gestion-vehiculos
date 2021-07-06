import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  books = this.service.getBooksObs;

  constructor(
    private readonly service: ApiService,
    private readonly router: Router
  ) {}

  async ngOnInit(): Promise<void> {}

  onNewBook($event: MouseEvent) {
    this.router.navigate(['/books/detail/','new'])
  }
}
