import {NgModule} from '@angular/core';

import {AutosRoutingModule} from './usuarios-routing.module';
import {CommonModule} from "@angular/common";
import {ApiService} from "../../shared/services/api.service";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {AlertModule} from "ngx-bootstrap/alert";

@NgModule({
  imports: [
    AutosRoutingModule,
    CommonModule,
    CollapseModule.forRoot(),
    AlertModule,
  ],
  declarations: [
    ],
  providers: [ApiService]
})
export class UsuariosModule {
}
