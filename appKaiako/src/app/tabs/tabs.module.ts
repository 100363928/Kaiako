import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPage } from './tabs.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: '../tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'tab1/ver-entrenador',
        loadChildren: '../ver-entrenador/ver-entrenador.module#VerEntrenadorPageModule'
      },
      {
        path: 'tab1/ver-entrenador/:id',
        loadChildren: '../ver-entrenador/ver-entrenador.module#VerEntrenadorPageModule'
      },
      {
        path: 'tab1/ver-entrenador/solicitud',
        loadChildren: '../solicitud/solicitud.module#SolicitudPageModule'
      },
      {
        path: 'tab1/ver-entrenador/solicitud/:id',
        loadChildren: '../solicitud/solicitud.module#SolicitudPageModule'
      },
      {
        path: 'tab2',
        loadChildren: '../tab2/tab2.module#Tab2PageModule'
      },
      {
        path: 'tab3',
        loadChildren: '../tab3/tab3.module#Tab3PageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
