import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { Usuario } from '../services/todo.service';
import { TodoService } from './../services/todo.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage implements OnInit {
   
  usuario:Usuario= {
    nombre: '',
    nombreUsr:'',
    apellido:'',
    email:''
  }

  saveData(){
    this.todoService.addUsuario(this.usuario);
  }
 
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  
 
  // mensajes de validacón
  validation_messages = {
   'email': [
     { type: 'required', message: 'Email requerido.' },
     { type: 'pattern', message: 'Ingresa email valido.' }
   ],
   'password': [
     { type: 'required', message: 'Contraseña requerida.' },
     { type: 'minlength', message: 'Contraseña tiene que ser de al menos 5 caracteres.' }
   ]
 };
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {}
 
  ngOnInit(){
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      Nombre: new FormControl('', Validators.compose([
        Validators.required
      ])),
      Apellidos: new FormControl('', Validators.compose([
        Validators.required
      ])),
      NombreUsr: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }
 
  tryRegister(value,tipo:string){
    var tipo ="cliente";
    var hola = this.authService.registerUser(value,tipo)
     .then(res => {
       console.log(res);
       this.errorMessage = "";
       this.successMessage = "Cuenta creada! Inicia sesión";
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
     })
  }
 
  goLoginPage(){
    this.navCtrl.navigateBack('');
  }
 
 
}
