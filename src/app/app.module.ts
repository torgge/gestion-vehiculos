import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {DefaultLayoutComponent} from './containers';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { IconModule } from '@coreui/icons-angular';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    IconModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
