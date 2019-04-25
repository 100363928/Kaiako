import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

export interface zona {
  tipo:string; 
  zona:string,
  open:boolean,
  ej:ejercicio[]
}

export interface ejercicio {
  nombre:string;
  reps:0;
  series:0;
  check:boolean;
  img:string;
}

export interface rutina{
  nombre:string;
  solicitante:string;
  entrenador:string;
  ejer?:ejercicio[];
}


@Injectable({
  providedIn: 'root'
})


export class CrearRutinasService {
  private misRutinasCollection: AngularFirestoreCollection<rutina>;
  private miRutina: Observable<rutina[]>;
  private rutinaCollection: AngularFirestoreCollection<rutina>;
  private rutinas: Observable<rutina[]>;
  rutina : rutina[];
  ej: ejercicio[];
  

  constructor(private db: AngularFirestore) { 
    this.rutinaCollection = this.db.collection<rutina>('rutinas');
    
  }

  setRutina(lista:ejercicio[]){
   this.ej=lista;
  }
  getRutina(){
    return this.ej;
   }
   //Guardar a base de datos
  saveRutina(ejerci : ejercicio[],rutina:rutina){
    rutina.ejer=ejerci;
    this.rutinaCollection.add(rutina);
  }

  getMisRutinas(){
    
    this.misRutinasCollection = this.db.collection<rutina>('rutinas',ref => ref.where('solicitante', '==', firebase.auth().currentUser.uid));
    this.miRutina = this.misRutinasCollection.snapshotChanges()
    .pipe(
      map(actions => {
       return actions.map(a => {
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         console.log("PPP "  +data);
          return { id, ...data};
        });
     })
   );
   return this.miRutina;
  }
}
