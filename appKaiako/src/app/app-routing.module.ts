import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'register-entr', loadChildren: './register-entr/register-entr.module#RegisterEntrPageModule' },
  { path: 'entrenador-tabs', loadChildren: './entrenador-tabs/entrenador-tabs.module#EntrenadorTabsPageModule' },
  { path: 'notificaciones', loadChildren: './notificaciones/notificaciones.module#NotificacionesPageModule' },
  { path: 'ver-entrenador', loadChildren: './ver-entrenador/ver-entrenador.module#VerEntrenadorPageModule' },
  { path: 'solicitud', loadChildren: './solicitud/solicitud.module#SolicitudPageModule' },
  { path: 'aceptar-solicitud', loadChildren: './aceptar-solicitud/aceptar-solicitud.module#AceptarSolicitudPageModule' },
  { path: 'crear-rutina', loadChildren: './crear-rutina/crear-rutina.module#CrearRutinaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
