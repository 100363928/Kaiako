import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { TodoService } from './../services/todo.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
 
  constructor(
 
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private todoService: TodoService
 
  ) { }
 
  ngOnInit() {
 
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }
 
 
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email requerido.' },
      { type: 'pattern', message: 'Ingresa email valido.' }
    ],
    'password': [
      { type: 'required', message: 'Contraseña requerida.' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 6 caracteres.' }
    ]
  };
 
 
  loginUser(value){
    this.authService.loginUser(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.navCtrl.navigateForward('/menu/tabs');
    }, err => {
      this.errorMessage = err.message;
    });
    
    const firestore = firebase.firestore();
    firestore.collection('registro').doc(value.email).get().then(function (doc) {
      if (doc && doc.exists) {
      var data = doc.data();
      firestore.collection('usuarios').doc(firebase.auth().currentUser.uid).set(data)
      firestore.collection('registro').doc(value.email).delete();
      }
    });
    this.todoService.initializeUser();
  }
 
  registrarEntrenador(){
    this.navCtrl.navigateForward('/register-entr');
  }
  registrarCliente(){
    this.navCtrl.navigateForward('/register');
  }

}
