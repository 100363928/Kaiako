import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'tabs',
        loadChildren: '../tabs/tabs.module#TabsPageModule'
      },
      {
        path: 'entrenador-tabs',
        loadChildren: '../entrenador-tabs/entrenador-tabs.module#EntrenadorTabsPageModule'
      },
      {
        path: 'aceptar-solicitud',
        loadChildren: '../aceptar-solicitud/aceptar-solicitud.module#AceptarSolicitudPageModule'
      },
      {
        path: 'notificaciones',
        loadChildren: '../notificaciones/notificaciones.module#NotificacionesPageModule'
      },
      {
        path: 'aceptar-solicitud/crear-rutina',
        loadChildren: '../crear-rutina/crear-rutina.module#CrearRutinaPageModule'
      },
      {
        path: 'aceptar-solicitud/crear-rutina/:id',
        loadChildren: '../crear-rutina/crear-rutina.module#CrearRutinaPageModule'
      },
      {
        path: 'aceptar-solicitud/crear-rutina/rutina',
        loadChildren: '../rutina/rutina.module#RutinaPageModule'
      },
      {
        path: 'aceptar-solicitud/crear-rutina/rutina/:id',
        loadChildren: '../rutina/rutina.module#RutinaPageModule'
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
