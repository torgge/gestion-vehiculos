import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutosListComponent } from './list/autos.list.component';
import { AutosViewComponent } from './view/autos.view.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Autos'
    },
    children: [
      {
        path: '',
        component: AutosListComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'autos/:autoId',
        component: AutosViewComponent,
        data: {
          title: 'Detail'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosRoutingModule {}
