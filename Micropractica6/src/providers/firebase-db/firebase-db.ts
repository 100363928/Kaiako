import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Contact } from "../../models/contact.model";

@Injectable()
export class FirebaseDbProvider {
 constructor(public afDB:AngularFireDatabase) {
  console.log('Hello FirebaseDbProvider Provider');
 }
 guardarContacto(contacto: Contact)
 {
  if (contacto.key=='') { alert(contacto.key); contacto.key=""+Date.now();}
  alert(contacto.key);
  return this.afDB.database.ref('contacto/'+contacto.key).set(contacto);
 }

 delContacto(id)
 {
  this.afDB.database.ref('contacto/'+id).remove();
 }

 private clientesRef=this.afDB.list<Contact>('contacto');
 getClientes()
 {
   return this.clientesRef.valueChanges();
 }

}
