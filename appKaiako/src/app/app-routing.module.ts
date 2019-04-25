import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: '', loadChildren: './inicio/inicio.module#InicioPageModule'}, 
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'register-entr', loadChildren: './register-entr/register-entr.module#RegisterEntrPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'clasificacion', loadChildren: './clasificacion/clasificacion.module#ClasificacionPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
