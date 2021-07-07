import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiciosListComponent } from './list/servicios.list.component';
import { ServiciosViewComponent } from './view/servicios-view.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Servicios'
    },
    children: [
      {
        path: '',
        component: ServiciosListComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'servicios/:servicioId',
        component: ServiciosViewComponent,
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
