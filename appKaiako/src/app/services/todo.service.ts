import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { defineBase } from '@angular/core/src/render3';
import * as firebase from 'firebase/app';

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

  constructor(db: AngularFirestore) { 
    this.solicitudesCollection = db.collection<Solicitud>('solicitudes');
    this.usuariosCollection = db.collection<Usuario>('clientes');

    this.solicitudes = this.solicitudesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          console.log(id);
          return { id, ...data};
        });
      })
    );
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

  updateSolicitud(solicitud: Solicitud, id: string) {
    // return this.solicitudesCollection.doc(id).update(solicitud);
    //this.usuariosCollection.doc(firebase.auth().currentUser.uid).collection('solicitudes').doc(firebase.auth().currentUser.uid).update(solicitud);
    return  this.solicitudesCollection.doc(id).update(solicitud);
  }

  addSolicitud(solicitud: Solicitud){
    //return this.solicitudesCollection.add(solicitud);
    //return this.usuariosCollection.doc(firebase.auth().currentUser.uid).collection('solicitudes').doc(firebase.auth().currentUser.uid).set(solicitud);
    return this.solicitudesCollection.add(solicitud);
  }

  removeSolicitud(id){
    //return this.solicitudesCollection.doc(id).delete();
    // return this.usuariosCollection.doc(firebase.auth().currentUser.uid).collection('solicitudes').doc(firebase.auth().currentUser.uid).delete();
    return this.solicitudesCollection.doc(id).delete();
  }

  addUsuario(usuario:Usuario){
    var db: AngularFirestore;
    this.usuariosCollection.doc(firebase.auth().currentUser.uid).set(usuario);
    return this.usuariosCollection.doc(firebase.auth().currentUser.uid).set(usuario);
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
