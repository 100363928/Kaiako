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
  solicitante: string;
  entrenador: string;
}

export interface Usuario {
  key?: string;
  nombre: string;
  nombreUsr: string;
  apellido: string;
  email: string;
  certificado?: string;
  descripcion?: string;
  anosExperiencia?: string;
  numEstrellas?: number;
  puntuacion?: number;
  tipo: string;
}

export interface Anuncio {
  nombre: string;
  img: string;
  descr: string;
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

  constructor(private db: AngularFirestore) { 
    this.usuariosCollection = this.db.collection<Usuario>('usuarios');
    this.entrenadorCollection = this.db.collection<Usuario>('/usuarios', ref => ref.where('tipo', '==', 'entrenador'));
    this.solicitudesCollection = this.db.collection<Solicitud>('solicitudes');
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

  initializeUser(){
    this.solicitudesCollection = this.db.collection<Solicitud>
    ('solicitudes', ref => ref.where('entrenador', '==', firebase.auth().currentUser.uid));
  }


  getSolicitudes() {
    this.initializeUser();
    this.solicitudes = this.solicitudesCollection.snapshotChanges()
    .pipe(
      map(actions => {
       return actions.map(a => {
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         console.log('OLLAAAASDS' + id);
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
    return  this.solicitudesCollection.doc(id).update(solicitud);
  }

  addSolicitud(solicitud: Solicitud) {
    var colSol = this.solicitudesCollection;
    return colSol.add(solicitud);
  }

  removeSolicitud(id){
    return this.solicitudesCollection.doc(id).delete();
  }

  getEntrenadores(){
    this.entrenadores = this.entrenadorCollection.snapshotChanges()
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

  getEntrenador(id){
    return this.entrenadorCollection.doc<Usuario>(id).valueChanges();
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

}
