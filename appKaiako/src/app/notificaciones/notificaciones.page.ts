import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService, Usuario } from '../services/todo.service';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  usuarioId = null;

  usuario: Usuario = null;

  notificacionTittle = null;
  notificationText = null;
  notificationImage = null;

  tipo: string;
  notificacion: boolean;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.usuarioId = firebase.auth().currentUser.uid;
    if (this.usuarioId)  {
      this.loadTodo();
    }

    /*if(this.usuario.notificacion == true){

    }*/

    //Esta condicion hay que cambiarla por la de arriba
    /*if(true){

      //No me descarga el usuario???
      console.log(this.usuario);

      if(this.tipo == "cliente"){
        this.notificacionTittle = "Nueva Rutina";
        this.notificationText = "Ha recibido una nueva rutina";
      }
      else{
        this.notificacionTittle = "Solicitud de Rutina";
        this.notificationText = "Ha recibido una nueva solicitud de rutina";
      }

    }
    else{
      document.getElementById("notificacion").style.display = "none";
      //Poner una div escondida con un mensaje generico
      document.getElementById("noNotificaciones").style.display = "block";
    }*/

    

  }

  //No se donde ponerla para que funcione
  /*function eliminarNotificacion(){
    //Habra un boton para eliminar la rutina. Modificar el campo notificacion de la base de datos y esconder el card
    alert("funciona");
    document.getElementById("notificacion").style.display = "none";
  }*/

  

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();

    this.todoService.getUsuario(this.usuarioId).subscribe(res => {
      loading.dismiss();
      this.usuario = res;
      this.tipo = res.tipo;
      this.notificacion = res.notificacion;
      //this.notificacion = res.notificacion;
    });
  }

  borrarNotificacion(){
    console.log(this.usuario);
    this.notificacion=false;
    this.usuario.notificacion=false;
    this.modiUsr();
    
    

  }
  async modiUsr(){
    this.todoService.updateUsuario(this.usuario, this.usuarioId);
  }

  

}
