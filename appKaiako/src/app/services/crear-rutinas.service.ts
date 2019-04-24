import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

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
}

@Injectable({
  providedIn: 'root'
})


export class CrearRutinasService {
  private ejercicioCollection: AngularFirestoreCollection<ejercicio>;
  private ejercicios: Observable<ejercicio[]>;
  private rutinaCollection: AngularFirestoreCollection<rutina>;
  private rutinas: Observable<rutina[]>;
  rutina : rutina[];
  ej: ejercicio[];
  constructor() { }
  setRutina(lista:ejercicio[]){
   this.ej=lista;
  }
  getRutina(){
    return this.ej;
   }
  saveRutina(ejerci : ejercicio[],rutina:rutina){
    
  }
}
