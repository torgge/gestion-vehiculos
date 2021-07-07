import {Component, OnInit} from '@angular/core';

import { navItems } from '../../_nav';
import { cilEnvelopeOpen, flagSet } from '@coreui/icons';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  providers: [IconSetService],
})
export class DefaultLayoutComponent {
  ativeRoute: String = "";

  constructor(public iconSet: IconSetService) {
    // iconSet singleton
    iconSet.icons = { cilEnvelopeOpen, ...flagSet };
  }

  minimized = false;
  public navItems = [...navItems];

  toggleMinimize(e: any) {
    this.minimized = e;
  }
}
