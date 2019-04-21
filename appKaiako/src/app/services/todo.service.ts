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
  private entrenadorCollection: AngularFirestoreCollection<Usuario>;
  private entrenadores: Observable<Usuario[]>;
  private db: AngularFirestore;
  
  constructor(db: AngularFirestore) { 
    this.usuariosCollection= db.collection<Usuario>('usuarios');
    this.entrenadorCollection= db.collection<Usuario>('/usuarios', ref => ref.where('tipo','==','entrenador'));
    // todos Los usuarios
    this.usuarios = this.usuariosCollection.snapshotChanges()
   .pipe(
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
    this.solicitudesCollection = this.usuariosCollection.doc<Usuario>(firebase.auth().currentUser.uid).collection<Solicitud>('solicitudes');
    this.solicitudes = this.solicitudesCollection.snapshotChanges()
    .pipe(
      map(actions => {
       return actions.map(a => {
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         console.log(" OLLAAAASDS "+ id);
         console.log(data);
          return { id, ...data};
        });
     })
   );
    return this.solicitudes;
  }

  getSolicitud(id) {
 
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
    var colSol = firebase.firestore().collection('usuarios').doc(firebase.auth().currentUser.uid).collection('solicitudes');
    return colSol.add(solicitud);
  }

  removeSolicitud(id){
    //return this.solicitudesCollection.doc(id).delete();
    // return this.usuariosCollection.doc(firebase.auth().currentUser.uid).collection('solicitudes').doc(firebase.auth().currentUser.uid).delete();
    return firebase.firestore().collection('usuarios').doc(firebase.auth().currentUser.uid).collection('solicitudes').doc(id).delete();
  }

  getEntrenadores(){
    this.entrenadores=this.entrenadorCollection.snapshotChanges()
  .pipe(
    map(actions => {
     return actions.map(a => {
       const data = a.payload.doc.data();
       const id = a.payload.doc.id;
       console.log(id);
        return { id, ...data};
      });
   })
 );
    return this.entrenadores;
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
