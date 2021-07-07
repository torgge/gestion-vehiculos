import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosListComponent } from './list/usuarios.list.component';
import { UsuariosViewComponent } from './view/usuarios.view.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Usuarios'
    },
    children: [
      {
        path: '',
        component: UsuariosListComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'usuarios/:usuarioId',
        component: UsuariosViewComponent,
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
