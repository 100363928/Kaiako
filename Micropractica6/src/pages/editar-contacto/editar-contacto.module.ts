import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarContactoPage } from './editar-contacto';

@NgModule({
  declarations: [
    EditarContactoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarContactoPage),
  ],
})
export class EditarContactoPageModule {}
