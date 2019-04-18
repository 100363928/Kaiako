import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerEntrenadorPage } from './ver-entrenador.page';

const routes: Routes = [
  {
    path: '',
    component: VerEntrenadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerEntrenadorPage]
})
export class VerEntrenadorPageModule {}
