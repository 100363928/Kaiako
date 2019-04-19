
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrenadorTabsPage } from './entrenador-tabs.page';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'entrenador-tabs',
    component: EntrenadorTabsPage,
    children: [
      {
        path: 'explora',
        loadChildren: '../explora/explora.module#ExploraPageModule'
      },
      {
        path: 'clientes-entr',
        loadChildren: '../clientes-entr/clientes-entr.module#ClientesEntrPageModule'
      },
      {
        path: 'perfil-entr',
        loadChildren: '../perfil-entr/perfil-entr.module#PerfilEntrPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'entrenador-tabs/explora',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntrenadorTabsPage]
})
export class EntrenadorTabsPageModule {}
