import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Book} from "../../shared/models/servicio.model";

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html'
})
export class FormBookComponent implements OnInit {

  @Input()
  selectedBook: Book | undefined;

  @Output() OnSaveEvent = new EventEmitter<Book>();

  constructor() { }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

  ngOnInit(): void {
  }

  save(selectedBook: Book|undefined) {
    this.OnSaveEvent.emit(this.selectedBook);
  }

}
