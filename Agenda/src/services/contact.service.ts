import {Contact} from "../models/contact.model";

export class ContactService{
    private contacts: Contact[]=[
        {nombre:"Daniela Q",movil:"634519287",correo:"danshca@hotmail.com"}
    ];

    constructor(){}

    addContact(value: Contact){
        this.contacts.push(value);
    }

    getContacts(){
        return this.contacts;
    }

    updateContact(value:Contact){

    }

    removeContact(value:Contact){
    
    }

}