import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import { cilEnvelopeOpen, flagSet } from '@coreui/icons';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';


@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers: [IconSetService],
})
export class AppComponent implements OnInit {
  title = 'Book Store';
  constructor(
    private router: Router,
    public iconSet: IconSetService) {
      iconSet.icons = { cilEnvelopeOpen, ...flagSet };
    }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
