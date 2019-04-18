import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrenadorTabsPage } from './entrenador-tabs.page';

const routes: Routes = [
  {
    path: 'entrenador-tabs',
    component: EntrenadorTabsPage,
    children: [
      {
        path: 'explora',
        children: [
          {
            path: '',
            loadChildren: '../explora/explora.module#ExploraPageModule'
          }
        ]
      },
      {
        path: 'clientes-entr',
        children: [
          {
            path: '',
            loadChildren: '../clientes-entr/clientes-entr.module#ClientesEntrPageModule'
          }
        ]
      },
      {
        path: 'perfil-entr',
        children: [
          {
            path: '',
            loadChildren: '../perfil-entr/perfil-entr.module#PerfilEntrPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/entrenador-tabs/explora',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/entrenador-tabs/explora',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EntrenadorTabsPageRoutingModule {}
