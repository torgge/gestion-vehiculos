import {Component, OnInit} from '@angular/core';

import { navItems } from '../../_nav';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  ativeRoute: String = "";

  constructor() {
  }

  minimized = false;
  public navItems = [...navItems];

  toggleMinimize(e: any) {
    this.minimized = e;
  }
}
