import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { of } from 'rxjs';

export interface Solicitud {
  key?: string;
  nombre: string;
  altura: number;
  peso: number;
  dias: number;
  objetivo: string;
  mensaje: string;
}



export interface Usuario {
  key?: string;
  nombre: string;
  nombreUsr:string;
  apellido:string;
  email:string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private solicitudesCollection: AngularFirestoreCollection<Solicitud>;
  private solicitudes: Observable<Solicitud[]>;
  private usuariosCollection: AngularFirestoreCollection<Usuario>;
  private usuarios: Observable<Usuario[]>;
  private db: AngularFirestore;
  
  constructor(db: AngularFirestore) { 
  }
  /*
   solLista: Solicitud[];
   
    solicitud:Solicitud={
        key: ' ',
      nombre: ' ',
      altura: 0,
      peso: 0,
      dias: 0,
      objetivo: ' ',
      mensaje: ' ',
    }
   
   
  getSolicitudes() {
    console.log(this.solicitudes);
    return this.solicitudes;
  }


  getSolicitud(id) {
    // creo que deberia de ser asi:
    //this.usuariosCollection.doc(firebase.auth().currentUser.uid).collection('solicitudes').doc(firebase.auth().currentUser.uid).valueChanges();
    //this.solicitudesCollection.doc<Solicitud>(id).valueChanges();
    return this.solicitudesCollection.doc<Solicitud>(id).valueChanges();
  }
 /*
   getSol (){
    this.solLista=[];
    var colSol = firebase.firestore().collection('usuarios').doc(firebase.auth().currentUser.uid).collection('solicitudes');
     colSol.get().then((snapshot)=>{
       snapshot.docs.forEach(doc =>{
          console.log("Nombre doc "+ doc.data().nombre);
          this.solicitud.key= doc.data().key;
          this.solicitud.nombre= doc.data().nombre;
          this.solicitud.altura= doc.data().altura;
          this.solicitud.peso= doc.data().peso;
          this.solicitud.dias= doc.data().dias;
         this.solicitud.objetivo= doc.data().objetivo;
         this.solicitud.mensaje= doc.data().mensaje;
        this.solLista.push(this.solicitud);
        console.log("Tamano "+this.solLista.length);
       }) 
     })
     console.log("Tamano "+this.solLista.length);
     return  of(this.solLista);
  }
 */

  updateSolicitud(solicitud: Solicitud, id: string) {
    // return this.solicitudesCollection.doc(id).update(solicitud);
    //this.usuariosCollection.doc(firebase.auth().currentUser.uid).collection('solicitudes').doc(firebase.auth().currentUser.uid).update(solicitud);
    return  this.solicitudesCollection.doc(id).update(solicitud);
  }

  addSolicitud(solicitud: Solicitud){
    //return this.solicitudesCollection.add(solicitud);
    //return this.usuariosCollection.doc(firebase.auth().currentUser.uid).collection('solicitudes').doc(firebase.auth().currentUser.uid).set(solicitud);
    var colSol = firebase.firestore().collection('usuarios').doc(firebase.auth().currentUser.uid).collection('solicitudes');
    return colSol.add(solicitud);
  }

  removeSolicitud(id){
    //return this.solicitudesCollection.doc(id).delete();
    // return this.usuariosCollection.doc(firebase.auth().currentUser.uid).collection('solicitudes').doc(firebase.auth().currentUser.uid).delete();
    return firebase.firestore().collection('usuarios').doc(firebase.auth().currentUser.uid).collection('solicitudes').doc(id).delete();
  }

  removeUsuario(id){
    return this.usuariosCollection.doc(id).delete();
  }

  updateUsuario(usuario: Usuario, id: string) {
    return this.usuariosCollection.doc(id).update(usuario);
  }
  
  getUsuarios() {
    console.log(this.usuarios);
    return this.usuarios;
  }

  getUsuario(id) {
    return this.usuariosCollection.doc<Usuario>(id).valueChanges();
  }

  getNomUsuario(id) {
    var db: AngularFirestore;
    return 
  }

}
