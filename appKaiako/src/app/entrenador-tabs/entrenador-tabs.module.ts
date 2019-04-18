
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntrenadorTabsPage } from './entrenador-tabs.page';

import { EntrenadorTabsPageRoutingModule } from './tabs.router.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrenadorTabsPageRoutingModule
  ],
  declarations: [EntrenadorTabsPage]
})
export class EntrenadorTabsPageModule {}
