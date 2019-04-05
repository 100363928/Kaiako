import { Contact } from "../models/contact.model";


export class ContactService{

  private contacts: Contact [] = [];
  private indiceEdicion;

  constructor(){
  }

  getContacts() {
    return this.contacts;
  }

  getindiceEdicion(){
    return this.indiceEdicion;
  }

  setindiceEdicion(value){
    this.indiceEdicion = value;
  }

  addContact(value: Contact){
    this.contacts.push(value);
  }

  updateContact(value: Contact){
    this.contacts[this.indiceEdicion].nombre = value.nombre;
    this.contacts[this.indiceEdicion].organizacion = value.organizacion;
    this.contacts[this.indiceEdicion].movil = value.movil;
    this.contacts[this.indiceEdicion].correo = value.correo;
  }

  removeContact(value: Contact){
    var index = this.contacts.indexOf(value);
    this.contacts.splice(index,1);
    console.log("Removed");
  }

}
