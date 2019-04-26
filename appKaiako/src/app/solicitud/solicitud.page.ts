import { TodoService } from './../services/todo.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Solicitud, Usuario } from '../services/todo.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {

  entrenadorId = null;

  solicitud: Solicitud = { 
    key: '1',
    nombre: 'prueba',
    peso: 1,
    altura: 1,
    dias: 1,
    objetivo: "Ejercicio",
    mensaje: "Un usuario quiere que le entrenes",
    solicitante: firebase.auth().currentUser.uid,
    entrenador: this.entrenadorId
  };

  entrenador: Usuario = null;

  

  solicitudId = null;

  constructor(private route: ActivatedRoute, private nav: NavController,
     private todoService: TodoService, private loadingController: LoadingController){}

  ngOnInit() {
    this.solicitud.entrenador = this.route.snapshot.params['id'];
    this.solicitudId = firebase.auth().currentUser;
    console.log(this.solicitudId);
    this.loadTodo();
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
 
    /*this.todoService.getSolicitud(this.solicitudId).subscribe(res => {
      loading.dismiss();
      this.solicitud = res;
    });*/

    this.todoService.getUsuario(this.solicitud.entrenador).subscribe(res=>{
      loading.dismiss();
      this.entrenador = res;
    });
  }
 
  async saveTodo() {

    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();

    console.log(this.entrenador);
    console.log(this.solicitud);

    //this.todoService.updateUsuario(this.entrenador, this.entrenador.key);

    this.todoService.addSolicitud(this.solicitud).then(() => {
      loading.dismiss();
      this.nav.navigateBack('/menu/tabs/tabs/tab1');
    });
  }

  modifyUsr(){
    this.entrenador.notificacion=true;
    console.log(this.entrenador);
    this.modUsr();
    console.log("MOD");
    this.saveTodo();
    
  }

  async modUsr(){
    /*const loading = await this.loadingController.create({
      message: 'Modificando Usuario..'
    });
    await loading.present();*/

    console.log(this.entrenador);
    console.log(this.solicitud);

    this.todoService.updateUsuario(this.entrenador, this.solicitud.entrenador).then(() => {
      
      
    });
  }

 

}
