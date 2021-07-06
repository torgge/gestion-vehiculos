import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html'
})
export class FormModalComponent implements OnInit {

  @Input() selectedData: any|undefined
  @Input() list = []
  @Output() OnSelectEvent = new EventEmitter<any>()
  @ViewChild('formModal') public formModal!: ModalDirective;

  ngOnInit(): void {
    throw new Error("Method not implemented.")
  }

  onSelect($event: Event) {
    this.OnSelectEvent.emit(this.selectedData)
  }
}
