import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Solicitud {
  key?: string;
  nombre: string;
  altura: number;
  peso: number;
  dias: number;
  objetivo: string;
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private solicitudesCollection: AngularFirestoreCollection<Solicitud>;
  private solicitudes: Observable<Solicitud[]>;

  constructor(db: AngularFirestore) { 
    this.solicitudesCollection = db.collection<Solicitud>('solicitudes');

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
    return this.solicitudesCollection.doc<Solicitud>(id).valueChanges();
  }

  updateSolicitud(solicitud: Solicitud, id: string) {
    return this.solicitudesCollection.doc(id).update(solicitud);
  }

  addSolicitud(solicitud: Solicitud){
    return this.solicitudesCollection.add(solicitud);
  }

  removeSolicitud(id){
    return this.solicitudesCollection.doc(id).delete();
  }

}
