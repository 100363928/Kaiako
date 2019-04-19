import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PerfilEntrPage } from './perfil-entr.page';
// Tabs


const routes: Routes = [
  {
    path: '',
    component: PerfilEntrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilEntrPage]
})
export class PerfilEntrPageModule {}
