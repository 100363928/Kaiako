import { TodoService } from './../services/todo.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../services/todo.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {

  solicitud: Solicitud = { 
    key: '1',
    nombre: 'prueba',
    peso: 1,
    altura: 1,
    dias: 1,
    objetivo: "Ejercicio",
    mensaje: "Un usuario quiere que le entrenes"
  };

  solicitudId = null;

  constructor(private route: ActivatedRoute, private nav: NavController,
     private todoService: TodoService, private loadingController: LoadingController){}

  ngOnInit() {
    this.solicitudId = firebase.auth().currentUser;
    console.log(this.solicitudId);
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
 
    this.todoService.getSolicitud(this.solicitudId).subscribe(res => {
      loading.dismiss();
      this.solicitud = res;
    });
  }
 
  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();
    this.todoService.addSolicitud(this.solicitud).then(() => {
      loading.dismiss();
      this.nav.navigateBack('/menu/tabs/tabs/tab1/ver-entrenador');
    });
  }

}
