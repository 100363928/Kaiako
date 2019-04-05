import { ContactService } from './../../services/contact.service';
import { Component } from '@angular/core';
import { Contact } from './../../models/contact.model';
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
  selector: 'page-nuevo-contacto',
  templateUrl: 'nuevo-contacto.html',
})
export class NuevoContactoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoContactoPage');
  }

  onAddContact(value:{nombre:string,organizacion:string,movil:string,correo:string}){
    let datoscliente: Contact = {
      key: "",
      nombre: value.nombre,
      organizacion: value.organizacion,
      movil: value.movil,
      correo: value.correo
    };
    this.dbFirebase.guardarContacto(datoscliente).then(res=>{
    alert(datoscliente.key+ " guardado en FB");
    });

    this.navCtrl.pop();
  }

}
