import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-entr',
  templateUrl: './register-entr.page.html',
  styleUrls: ['./register-entr.page.scss'],
})
export class RegisterEntrPage implements OnInit {

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

  constructor(private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder) { }

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
        años: new FormControl('', Validators.compose([
          Validators.required
        ])),
      });
    }
    
    tryRegister(value){
      this.authService.registerUser(value)
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
