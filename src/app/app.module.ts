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
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { AutosViewComponent } from './views/autos/view/autos.view.component';
import { ServiciosViewComponent } from './views/servicios/view/servicios-view.component';
import { UsuariosViewComponent } from './views/usuarios/view/usuarios.view.component';
import { AutosModule, ServiciosModule, UsuariosModule } from './views';

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
    IconModule,
    IconSetModule.forRoot(),
    UsuariosModule,
    ServiciosModule,
    AutosModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, IconSetService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
