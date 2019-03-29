import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoContactoPage } from '../nuevo-contacto/nuevo-contacto';
import { EditarContactoPage } from '../editar-contacto/editar-contacto';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the LibretaContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-libreta-contactos',
  templateUrl: 'libreta-contactos.html',
})
export class LibretaContactosPage {

  contacts: Contact[] =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibretaContactosPage');
  }

  ionViewWillEnter(){
    this.dbFirebase.getClientes().subscribe(contacts=>{this.contacts=contacts;});
  }

  onLoadContactosPage(){
    this.navCtrl.push(NuevoContactoPage);
  }

  onRemoveContact(id){
    this.dbFirebase.delContacto(id);
  }

  onUpdateContact(value:{nombre:string,organizacion:string,movil:string,correo:string}){
    /*var index = this.contacts.indexOf(value);
    this.ContactService.setindiceEdicion(index);
    this.navCtrl.push(EditarContactoPage);*/
  }

  ContactosP(){
    this.navCtrl.push(NuevoContactoPage);
  }

}
