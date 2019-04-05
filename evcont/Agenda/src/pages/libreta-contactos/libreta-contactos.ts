import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoContactoPage } from '../nuevo-contacto/nuevo-contacto';
import {Contact} from '../../models/contact.model';
import {ContactService} from '../../services/contact.service';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private ContactService: ContactService) {
  }
   
  contacts: Contact [] = [];

  

  ionViewWillEnter(){
    this.contacts = this.ContactService.getContacts();
  }


  // lo que el llama onLoadContactosPage
  ContactosP(){
    this.navCtrl.push(NuevoContactoPage);
    }
}
