import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../services/todo.service';
import { TodoService } from './../services/todo.service';


@Injectable()
export class AuthenticateService {
  
  usuario:Usuario= {
    nombre: '',
    nombreUsr:'',
    apellido:'',
    email:''
  }
  constructor( private todoService: TodoService){
    
  }
  
  registerUser(value,tipo:string){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err)) // The UID of recently created user on firebase
       firebase.firestore().collection('registro').doc(value.email).set({
       nombre:value.Nombre,
       email:value.email,
       nombreUsr:value.NombreUsr,
       apellido:value.Apellidos,
       contraseña:value.password,
       tipo:tipo
       })
   })
  }
 
  loginUser(value){
   return new Promise<any>((resolve, reject) => {
     var uid = firebase.auth().currentUser.uid;
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
       console.log("UID CURRENT"+ firebase.auth().currentUser.uid);
   })
   
  }
 
  logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }

  writeUserData(value) {
    firebase.database().ref().set({
      NombreUsr: value.NombreUsr,
      Nombre: value.Nombre,
      email: value.email,
      Apellidos:value.Apellidos,
      
    });
  }

  

  
 
  userDetails(){
    return firebase.auth().currentUser;
  }
}