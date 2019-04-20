import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../services/todo.service';

@Injectable()
export class AuthenticateService {
   
  constructor(){
    
  }
  
  registerUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
       var uid = firebase.auth().currentUser.uid;
      // firebase.firestore().collection("usuarios").doc(firebase.auth().currentUser.uid).set({
      //  key: firebase.auth().currentUser.uid,
      //  email:value.email,
    //})
  

   })
  }
 
  loginUser(value){
   return new Promise<any>((resolve, reject) => {
     var uid = firebase.auth().currentUser.uid;
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
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