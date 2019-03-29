import { Contact } from './../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the NuevoContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-contacto',
  templateUrl: 'editar-contacto.html',
})
export class EditarContactoPage {

  contacto: Contact;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider) {
  }

  ionViewDidLoad() {
    this.contacto= this.contactService.getContacts()[this.contactService.getindiceEdicion()];
    console.log('ionViewDidLoad EditarContactoPage');
    var inputs = document.getElementsByTagName('ion-input');
    /*inputs[0].setAttribute("value", this.contacto.nombre);
    inputs[1].setAttribute("value", this.contacto.organizacion);
    inputs[2].setAttribute("value", this.contacto.movil);
    inputs[3].setAttribute("value", this.contacto.correo);*/

  }

  onUpdateContact(value:{nombre: string, organizacion: string, movil: string, correo: string}){

  }

}
