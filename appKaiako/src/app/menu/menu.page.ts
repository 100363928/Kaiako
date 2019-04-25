import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import {AuthenticateService} from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { Usuario,TodoService } from './../services/todo.service';
import { firestore } from 'firebase';
import * as firebase from 'firebase/app';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  persona:Usuario={
    nombre:'',
    apellido:'',
    nombreUsr:'',
    email:'',
    tipo:'a'
  };
  pages =[];
  pages1 = [
    {
      title: 'Cliente',
      url: '/menu/tabs'
    },
    {
      title: 'Clasificacion',
      url: '/menu/clasificacion'
    },

    {
      title: 'Ajustes',
      url: '/menu/config'
    }
  ];

  pages2 = [
    {
      title: 'Entrenador',
      url: '/menu/entrenador-tabs'
    },
    {
      title: 'Clasificacion',
      url: '/menu/clasificacion'
    },
    {
      title: 'Aceptar solicitud',
      url: '/menu/aceptar-solicitud'
    },
    {
      title: 'Ajustes',
      url: '/menu/config'
    }
  ];

  selectedPath = '';
  
  constructor(private router: Router, private authService : AuthenticateService,private lc: LoadingController, private todo: TodoService ,private navCtrl: NavController,) { 
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });   
  }

  async ngOnInit() {
    let id = firebase.auth().currentUser.uid;
    const firestore = firebase.firestore();
    const loading = await this.lc.create({
      message: 'Cargando tus datos'
     });
     this.todo.getUsuario(id).subscribe(res => {
      console.log(res);
      console.log('Pidiendo solicitudes');
      this.persona = res;
      });
     await loading.present();
      loading.dismiss();
     
      if(this.persona.tipo=='cliente'){
        this.pages=this.pages1;
      } else { this.pages=this.pages2; this.navCtrl.navigateForward('/menu/entrenador-tabs');}
    
    
  }

  logOut(){
   
    this.navCtrl.navigateBack('/inicio');
  }

  async getTipo(){
   
    
  }



}
